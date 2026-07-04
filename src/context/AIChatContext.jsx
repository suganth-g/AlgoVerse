import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const generateId = () => crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);

const AIChatContext = createContext();

export const useAIChat = () => useContext(AIChatContext);

export const AIChatProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState(() => {
    const saved = localStorage.getItem('ai_chat_history');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeChatId, setActiveChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentModel, setCurrentModel] = useState('gpt-4o');
  const [isTyping, setIsTyping] = useState(false);
  const [settings, setSettings] = useState({
    temperature: 0.7,
    maxTokens: 1000,
    theme: 'dark',
    autoScroll: true
  });
  
  // Ref for aborting requests
  const abortControllerRef = useRef(null);

  // Save history on change
  useEffect(() => {
    localStorage.setItem('ai_chat_history', JSON.stringify(chatHistory));
  }, [chatHistory]);

  // Load messages when active chat changes
  useEffect(() => {
    if (activeChatId) {
      const chat = chatHistory.find(c => c.id === activeChatId);
      if (chat) setMessages(chat.messages || []);
    } else {
      setMessages([]);
    }
  }, [activeChatId]);

  // Update history with new messages
  useEffect(() => {
    if (activeChatId && messages.length > 0) {
      setChatHistory(prev => prev.map(chat => {
        if (chat.id === activeChatId) {
          // If title is 'New Chat', update it with first message
          let newTitle = chat.title;
          if (chat.title === 'New Chat' && messages.length > 0) {
             const firstMsg = messages.find(m => m.role === 'user');
             if (firstMsg) {
                newTitle = firstMsg.content.slice(0, 30) + (firstMsg.content.length > 30 ? '...' : '');
             }
          }
          return { ...chat, messages, title: newTitle, updatedAt: new Date().toISOString() };
        }
        return chat;
      }));
    }
  }, [messages]);

  const createNewChat = () => {
    // Abort any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const newChat = {
      id: generateId(),
      title: 'New Chat',
      messages: [],
      pinned: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setChatHistory([newChat, ...chatHistory]);
    setActiveChatId(newChat.id);
    setMessages([]);
    setIsTyping(false);
  };

  const deleteChat = (id) => {
    setChatHistory(prev => prev.filter(c => c.id !== id));
    if (activeChatId === id) {
      setActiveChatId(null);
      setMessages([]);
    }
  };

  const renameChat = (id, newTitle) => {
    setChatHistory(prev => prev.map(c => c.id === id ? { ...c, title: newTitle } : c));
  };

  const pinChat = (id) => {
    setChatHistory(prev => prev.map(c => c.id === id ? { ...c, pinned: !c.pinned } : c));
  };

  const clearHistory = () => {
    setChatHistory([]);
    setActiveChatId(null);
    setMessages([]);
    localStorage.removeItem('ai_chat_history');
  };

  const sendMessage = async (content) => {
    if (!content.trim() || isTyping) return;
    
    // Ensure we have an active chat
    let currentChatId = activeChatId;
    if (!currentChatId) {
      const newChat = {
        id: generateId(),
        title: 'New Chat',
        messages: [],
        pinned: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setChatHistory(prev => [newChat, ...prev]);
      currentChatId = newChat.id;
      setActiveChatId(currentChatId);
    }

    const userMessage = { id: generateId(), role: 'user', content };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsTyping(true);

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: currentModel,
          messages: updatedMessages,
          temperature: settings.temperature,
          maxTokens: settings.maxTokens
        }),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      
      const aiMessageId = generateId();
      setMessages(prev => [...prev, { id: aiMessageId, role: 'assistant', content: '' }]);

      let done = false;
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') break;
              
              try {
                const parsed = JSON.parse(data);
                if (parsed.error) {
                   setMessages(prev => prev.map(m => m.id === aiMessageId ? { ...m, content: m.content + '\n**Error:** ' + parsed.error } : m));
                } else if (parsed.text) {
                  setMessages(prev => prev.map(m => m.id === aiMessageId ? { ...m, content: m.content + parsed.text } : m));
                }
              } catch (e) {
                // Ignore parse errors on incomplete chunks
              }
            }
          }
        }
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error("Error sending message:", error);
        setMessages(prev => [...prev, { 
          id: generateId(), 
          role: 'assistant', 
          content: '⚠️ Sorry, an error occurred while connecting to the AI server. Please make sure the backend server is running and try again.' 
        }]);
      }
    } finally {
      setIsTyping(false);
      abortControllerRef.current = null;
    }
  };

  const regenerateResponse = async () => {
     if (messages.length < 2 || isTyping) return;
     // Remove the last AI message
     const lastMessage = messages[messages.length - 1];
     if (lastMessage.role === 'assistant') {
        const newMessages = messages.slice(0, -1);
        setMessages(newMessages);
        
        // Re-send the last user prompt
        const lastUserMsg = newMessages[newMessages.length - 1];
        if (lastUserMsg && lastUserMsg.role === 'user') {
            const tempMessages = [...newMessages.slice(0, -1)]; // Exclude it since sendMessage will add it back
            setMessages(tempMessages);
            await sendMessage(lastUserMsg.content);
        }
     }
  };

  const editPrompt = (id, newContent) => {
     const idx = messages.findIndex(m => m.id === id);
     if (idx !== -1 && messages[idx].role === 'user') {
         // Truncate messages after this point
         const tempMessages = messages.slice(0, idx);
         setMessages(tempMessages);
         sendMessage(newContent);
     }
  };

  const value = {
    chatHistory,
    activeChatId,
    setActiveChatId,
    messages,
    setMessages,
    currentModel,
    setCurrentModel,
    isTyping,
    settings,
    setSettings,
    createNewChat,
    deleteChat,
    renameChat,
    pinChat,
    clearHistory,
    sendMessage,
    regenerateResponse,
    editPrompt
  };

  return (
    <AIChatContext.Provider value={value}>
      {children}
    </AIChatContext.Provider>
  );
};

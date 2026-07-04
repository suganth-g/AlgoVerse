import React, { useState } from 'react';
import AIChatSidebar from '../components/ai/AIChatSidebar';
import AIChatArea from '../components/ai/AIChatArea';
import AIQuickActions from '../components/ai/AIQuickActions';
import { AIChatProvider, useAIChat } from '../context/AIChatContext';

function AIAssistantContent() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { currentModel, setCurrentModel, messages, isTyping, sendMessage } = useAIChat();
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] -mx-4 sm:-mx-6 lg:-mx-8 -mt-6 bg-[#0a0f1c] flex overflow-hidden relative">
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
      <AIChatSidebar 
        currentModel={currentModel} 
        setCurrentModel={setCurrentModel} 
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
      />
      <AIChatArea 
        messages={messages}
        input={input}
        setInput={setInput}
        handleSend={handleSend}
        isTyping={isTyping}
        currentModel={currentModel}
        setIsMobileSidebarOpen={setIsMobileSidebarOpen}
      />
      <AIQuickActions setInput={(val) => {
        sendMessage(val);
      }} />
    </div>
  );
}

export default function AIAssistant() {
  return (
    <AIChatProvider>
      <AIAssistantContent />
    </AIChatProvider>
  );
}

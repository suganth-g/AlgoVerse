import React, { useRef, useEffect } from 'react';
import { Download, Trash2, Moon, Menu } from 'lucide-react';
import ChatMessage from './ChatMessage';
import AIPromptInput from './AIPromptInput';

export default function AIChatArea({ 
  messages, 
  input, 
  setInput, 
  handleSend, 
  isTyping, 
  currentModel, 
  setIsMobileSidebarOpen 
}) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0a0f1c] relative overflow-hidden">
      {/* Top Bar */}
      <div className="h-16 border-b border-white/5 flex items-center justify-between px-4 sm:px-6 bg-navy-900/50 backdrop-blur-xl z-10 shrink-0">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsMobileSidebarOpen(true)}
            className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white hidden sm:block">AI Assistant</span>
            <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-medium">
              {currentModel === 'gemini-2.5' ? 'Gemini 3.1 Pro (Low)' : currentModel.replace('-', ' ').toUpperCase()}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors hidden sm:block" title="Toggle Dark Mode">
            <Moon className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Export Chat" onClick={() => alert('Export feature coming soon!')}>
            <Download className="w-5 h-5" />
          </button>
          <button 
            onClick={() => {
              if (window.confirm('Are you sure you want to clear this chat?')) {
                // To keep it simple, we just clear messages in the active chat.
                // Or we can delete it entirely. Let's just alert for now or implement clearMessages.
                alert('Use the sidebar to delete or clear all history.');
              }
            }}
            className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors" title="Clear Chat"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar relative z-0">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center mb-6 border border-white/10 shadow-glow">
              <span className="text-4xl">🤖</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">How can I help you today?</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              I can help you understand complex algorithms, debug code, or generate optimized solutions in multiple languages.
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto w-full p-4 sm:p-6 pb-32 flex flex-col gap-6">
            {messages.map(msg => (
              <ChatMessage key={msg.id} message={msg} isTyping={false} />
            ))}
            {isTyping && (
              <ChatMessage message={{ role: 'assistant', content: '' }} isTyping={true} />
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/90 to-transparent z-10 pt-10">
        <div className="max-w-4xl mx-auto w-full">
          <AIPromptInput 
            input={input}
            setInput={setInput}
            handleSend={handleSend}
            isTyping={isTyping}
          />
        </div>
      </div>
    </div>
  );
}

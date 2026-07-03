import { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ChatMessage from '../components/features/ChatMessage';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: "Hello! I'm your AlgoVerse AI Assistant. I can help you understand algorithms, debug your code, or explain complex data structures. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'That is a great question! Based on your current progress, I suggest reviewing the Two Pointer technique. Would you like me to show you an example?'
      }]);
    }, 1000);
  };

  return (
    <div className="animate-fade-in max-w-4xl mx-auto h-[calc(100vh-10rem)] flex flex-col">
      <PageHeader 
        title="AI Assistant" 
        description="Get personalized help, code reviews, and explanations."
      />

      <div className="flex-1 bg-navy-900 border border-white/5 rounded-2xl shadow-glass flex flex-col overflow-hidden relative">
        {/* Glow effect */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar space-y-2">
          {messages.map(msg => (
            <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
          ))}
        </div>

        <div className="p-4 bg-navy-800 border-t border-white/5">
          <form onSubmit={handleSend} className="relative flex items-center">
            <div className="absolute left-4 p-1.5 bg-purple-500/20 rounded-lg">
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about algorithms or code..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-colors"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="absolute right-2 p-2 bg-purple-500 hover:bg-purple-600 disabled:opacity-50 disabled:hover:bg-purple-500 text-white rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] text-gray-500">AI can make mistakes. Verify important information.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

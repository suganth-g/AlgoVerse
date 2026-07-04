import React, { useRef, useEffect, useState } from 'react';
import { Send, Paperclip, Image as ImageIcon, Mic, X } from 'lucide-react';

export default function AIPromptInput({ input, setInput, handleSend, isTyping }) {
  const textareaRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(input.length);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isTyping) {
        handleSend();
      }
    }
  };

  const handlePaste = (e) => {
    // Stub for image/file pasting logic
    const items = e.clipboardData?.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          e.preventDefault();
          alert('Image pasting feature coming soon!');
        }
      }
    }
  };

  return (
    <div className="relative">
      <div className="bg-navy-800 border border-white/10 rounded-2xl shadow-2xl p-2 relative">
        <div className="flex items-end gap-2">
          {/* Action Buttons */}
          <div className="flex items-center gap-1 pb-1">
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" title="Attach File">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" title="Upload Image">
              <ImageIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Text Input */}
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              onPaste={handlePaste}
              disabled={isTyping}
              placeholder={isTyping ? "AI is thinking..." : "Ask AlgoVerse AI anything... (Shift+Enter for new line)"}
              className="w-full bg-transparent text-white placeholder-gray-500 py-3 px-2 focus:outline-none resize-none max-h-[200px] custom-scrollbar text-sm disabled:opacity-50"
              rows={1}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 pb-1">
            {input && (
              <button 
                onClick={() => setInput('')}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                title="Clear"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors hidden sm:block" title="Voice Input">
              <Mic className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="p-2.5 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl transition-all shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-3 px-1 text-[11px] text-gray-500">
        <span>AI can make mistakes. Verify important information.</span>
        <span>{charCount} chars</span>
      </div>
    </div>
  );
}

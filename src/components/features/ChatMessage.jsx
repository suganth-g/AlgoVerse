import { Bot, User, ThumbsUp, ThumbsDown, Copy } from 'lucide-react';
import Avatar from '../ui/Avatar';

export default function ChatMessage({ role, content, timestamp }) {
  const isAI = role === 'assistant';

  return (
    <div className={`flex gap-4 p-4 rounded-2xl ${isAI ? 'bg-white/5 border border-white/5' : ''}`}>
      <div className="shrink-0 mt-1">
        {isAI ? (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-glow-purple">
            <Bot className="w-4 h-4 text-white" />
          </div>
        ) : (
          <Avatar name="User" size="sm" />
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-semibold text-sm text-white">{isAI ? 'AlgoVerse AI' : 'You'}</span>
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>
        
        <div className="text-sm text-gray-300 leading-relaxed space-y-4">
          {/* Simple rendering for now, could be replaced with ReactMarkdown later */}
          {content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('```')) {
              const code = paragraph.replace(/```\w*\n?/, '').replace(/```$/, '');
              return (
                <div key={i} className="relative group">
                  <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 bg-white/10 hover:bg-white/20 rounded-md text-gray-300 transition-colors">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <pre className="font-mono text-sm bg-black/40 p-4 rounded-xl overflow-x-auto text-purple-300 border border-white/5">
                    {code}
                  </pre>
                </div>
              );
            }
            return <p key={i}>{paragraph}</p>;
          })}
        </div>

        {isAI && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
            <button className="p-1.5 text-gray-500 hover:text-green-400 hover:bg-green-500/10 rounded-md transition-colors">
              <ThumbsUp className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors">
              <ThumbsDown className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-gray-500 hover:text-white hover:bg-white/10 rounded-md transition-colors ml-auto flex items-center gap-1.5 text-xs">
              <Copy className="w-3.5 h-3.5" /> Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

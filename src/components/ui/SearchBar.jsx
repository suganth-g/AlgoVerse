import { Search, Command } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function SearchBar({ onSearch, placeholder = 'Search problems, topics...', className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => { setIsOpen(true); setTimeout(() => inputRef.current?.focus(), 100); }}
        className={`flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-gray-400 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${className}`}
      >
        <Search className="w-4 h-4" />
        <span className="text-sm hidden sm:inline">{placeholder}</span>
        <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-white/10 rounded text-[10px] font-mono text-gray-500 border border-white/10">
          <Command className="w-2.5 h-2.5" />K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-2xl mx-4 glass-card p-0 overflow-hidden animate-slide-down"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => { setQuery(e.target.value); onSearch?.(e.target.value); }}
                placeholder={placeholder}
                className="flex-1 bg-transparent text-white placeholder:text-gray-500 focus:outline-none text-lg"
              />
              <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-gray-500 border border-white/10">ESC</kbd>
            </div>
            <div className="p-2 max-h-80 overflow-y-auto">
              {!query ? (
                <div className="px-4 py-8 text-center text-gray-500">
                  <p className="text-sm">Start typing to search problems, topics, and more...</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {['Two Sum', 'Binary Search', 'Merge Sort', 'Dynamic Programming', 'Graph Traversal'].filter(
                    item => item.toLowerCase().includes(query.toLowerCase())
                  ).map((item, i) => (
                    <button key={i} className="w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3">
                      <Search className="w-4 h-4 text-gray-500" />
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

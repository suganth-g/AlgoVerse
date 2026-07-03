import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Dropdown({ trigger, items, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger || (
          <button className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-gray-300 hover:bg-white/10 transition-all">
            Select <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 min-w-[200px] glass-card p-1.5 z-50 animate-slide-down">
          {items.map((item, i) => (
            item.divider ? (
              <div key={i} className="my-1.5 border-t border-white/10" />
            ) : (
              <button
                key={i}
                onClick={() => { item.onClick?.(); setIsOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  item.danger ? 'text-red-400 hover:bg-red-500/10' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.label}
              </button>
            )
          ))}
        </div>
      )}
    </div>
  );
}

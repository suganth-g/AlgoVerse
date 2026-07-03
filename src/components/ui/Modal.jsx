import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, children, size = 'md', className = '' }) {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-6xl',
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e) => { if (e.key === 'Escape') onClose?.(); };
      window.addEventListener('keydown', handleEsc);
      return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleEsc); };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />
      <div
        onClick={e => e.stopPropagation()}
        className={`relative w-full ${sizes[size]} glass-card p-0 animate-slide-up ${className}`}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h3 className="text-lg font-semibold text-white font-poppins">{title}</h3>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

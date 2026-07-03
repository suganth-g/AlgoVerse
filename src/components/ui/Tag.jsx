import { X } from 'lucide-react';

const tagColors = {
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20',
  pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20 hover:bg-pink-500/20',
  gray: 'bg-gray-500/10 text-gray-400 border-gray-500/20 hover:bg-gray-500/20',
};

export default function Tag({ children, color = 'purple', removable = false, onRemove, onClick, className = '' }) {
  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all duration-200 ${tagColors[color]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
      {removable && (
        <button onClick={(e) => { e.stopPropagation(); onRemove?.(); }} className="hover:text-white">
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
}

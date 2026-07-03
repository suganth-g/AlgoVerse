import { Bookmark, Clock, ArrowRight } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

export default function BookmarkCard({ type, title, subtitle, date, onRemove, onClick }) {
  const isProblem = type === 'problem';

  return (
    <GlassCard onClick={onClick} className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between p-4 group">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md ${isProblem ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'}`}>
            {type}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3 h-3" /> {date}
          </span>
        </div>
        <h3 className="text-base font-medium text-white group-hover:text-purple-400 transition-colors truncate">{title}</h3>
        {subtitle && <p className="text-sm text-gray-400 truncate mt-1">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button 
          onClick={(e) => { e.stopPropagation(); onRemove?.(); }}
          className="p-2 text-purple-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          title="Remove Bookmark"
        >
          <Bookmark className="w-4 h-4 fill-current" />
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors">
          {isProblem ? 'Solve' : 'View'} <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </GlassCard>
  );
}

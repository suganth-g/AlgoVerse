import { CheckCircle2, Bookmark, Clock, ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';
import GlassCard from '../ui/GlassCard';

export default function ProblemCard({ 
  title, 
  id, 
  difficulty, 
  acceptance, 
  tags = [], 
  status = 'unsolved',
  bookmarked = false,
  onClick 
}) {
  return (
    <GlassCard onClick={onClick} className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between p-4">
      <div className="flex items-start sm:items-center gap-4">
        <div className="pt-1 sm:pt-0">
          {status === 'solved' ? (
            <CheckCircle2 className="w-5 h-5 text-green-400" />
          ) : status === 'attempted' ? (
            <Clock className="w-5 h-5 text-yellow-400" />
          ) : (
            <div className="w-5 h-5 rounded-full border-2 border-gray-600" />
          )}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-gray-400 text-sm">#{id}</span>
            <h3 className="text-base font-medium text-white group-hover:text-purple-400 transition-colors">{title}</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={difficulty.toLowerCase()}>{difficulty}</Badge>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-400">{acceptance}% Acceptance</span>
            <span className="text-xs text-gray-500 hidden sm:inline">•</span>
            <div className="hidden sm:flex items-center gap-1.5">
              {tags.map((tag, i) => (
                <span key={i} className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-md">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4 pl-9 sm:pl-0">
        <button className={`p-2 rounded-lg transition-colors ${bookmarked ? 'text-purple-400 hover:bg-purple-500/10' : 'text-gray-500 hover:bg-white/5 hover:text-white'}`}>
          <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors">
          Solve <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </GlassCard>
  );
}

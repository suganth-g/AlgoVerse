import { Lock } from 'lucide-react';
import Tooltip from '../ui/Tooltip';

export default function AchievementBadge({ icon: Icon, title, description, unlocked = false, date, color = 'purple' }) {
  const colors = {
    purple: 'from-purple-500 to-indigo-500 shadow-glow-purple',
    blue: 'from-blue-500 to-cyan-500 shadow-glow-blue',
    yellow: 'from-yellow-400 to-orange-500 shadow-[0_0_20px_rgba(250,204,21,0.3)]',
    green: 'from-emerald-400 to-teal-500 shadow-[0_0_20px_rgba(52,211,153,0.3)]',
    pink: 'from-pink-500 to-rose-500 shadow-[0_0_20px_rgba(236,72,153,0.3)]',
  };

  return (
    <Tooltip content={
      <div className="text-center p-1">
        <p className="font-semibold text-sm mb-1">{title}</p>
        <p className="text-xs text-gray-300 max-w-[150px] whitespace-normal mb-1">{description}</p>
        {unlocked && date && <p className="text-[10px] text-purple-300 mt-2">Unlocked: {date}</p>}
      </div>
    } position="top">
      <div className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 ${
        unlocked 
          ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:scale-105 cursor-pointer' 
          : 'bg-navy-900/50 border-white/5 opacity-50 grayscale cursor-not-allowed'
      }`}>
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
          unlocked ? `bg-gradient-to-br ${colors[color]}` : 'bg-gray-800'
        }`}>
          {Icon ? <Icon className={`w-7 h-7 ${unlocked ? 'text-white' : 'text-gray-500'}`} /> : null}
        </div>
        <span className="text-xs font-semibold text-center text-white line-clamp-1">{title}</span>
        
        {!unlocked && (
          <div className="absolute top-2 right-2">
            <Lock className="w-3 h-3 text-gray-500" />
          </div>
        )}
      </div>
    </Tooltip>
  );
}

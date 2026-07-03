import { Star, Zap } from 'lucide-react';

export default function XPBar({ xp = 0, level = 1, nextLevelXp = 1000, className = '' }) {
  const percentage = Math.min((xp / nextLevelXp) * 100, 100);

  return (
    <div className={`glass-card p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Level {level}</p>
            <p className="text-[10px] text-gray-400">{xp} / {nextLevelXp} XP</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-yellow-400">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-bold">{xp} XP</span>
        </div>
      </div>
      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

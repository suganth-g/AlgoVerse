import Avatar from '../ui/Avatar';
import { Trophy, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function LeaderboardRow({ rank, user, score, solved, trend }) {
  const isTop3 = rank <= 3;
  const rankColors = {
    1: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    2: 'text-gray-300 bg-gray-400/10 border-gray-400/20',
    3: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors group">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm ${isTop3 ? rankColors[rank] : 'text-gray-500'}`}>
          {rank}
        </div>
        
        <div className="flex items-center gap-3">
          <Avatar name={user.name} src={user.avatar} size="sm" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-white group-hover:text-purple-400 transition-colors">{user.name}</span>
              {isTop3 && <Trophy className={`w-3 h-3 ${rank === 1 ? 'text-yellow-400' : rank === 2 ? 'text-gray-300' : 'text-orange-400'}`} />}
            </div>
            <span className="text-xs text-gray-500">Level {user.level}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 sm:gap-10">
        <div className="hidden sm:block text-right">
          <div className="text-sm font-medium text-white">{solved}</div>
          <div className="text-xs text-gray-500">Solved</div>
        </div>
        
        <div className="text-right">
          <div className="text-sm font-bold text-purple-400">{score}</div>
          <div className="flex items-center justify-end gap-1 mt-0.5">
            {trend === 'up' ? <TrendingUp className="w-3 h-3 text-green-400" /> : 
             trend === 'down' ? <TrendingDown className="w-3 h-3 text-red-400" /> : 
             <Minus className="w-3 h-3 text-gray-500" />}
          </div>
        </div>
      </div>
    </div>
  );
}

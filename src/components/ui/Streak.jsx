import { Flame } from 'lucide-react';

export default function Streak({ count = 0, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`p-2.5 rounded-xl ${count > 0 ? 'bg-orange-500/20' : 'bg-white/5'}`}>
        <Flame className={`w-6 h-6 ${count > 0 ? 'text-orange-400 animate-pulse-slow' : 'text-gray-500'}`} />
      </div>
      <div>
        <p className="text-2xl font-bold text-white font-poppins">{count}</p>
        <p className="text-xs text-gray-400">Day Streak</p>
      </div>
    </div>
  );
}

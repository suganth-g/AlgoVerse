import { Calendar, ArrowRight, Flame } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function DailyChallenge({ title, difficulty, timeRemaining, isSolved = false }) {
  return (
    <GlassCard className="relative overflow-hidden group">
      {/* Background decoration */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-orange-400 font-semibold">
            <Flame className="w-5 h-5 animate-pulse" />
            <span>Daily Challenge</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            {timeRemaining}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{title}</h3>
        
        <div className="flex items-center gap-2 mb-6">
          <Badge variant={difficulty.toLowerCase()}>{difficulty}</Badge>
          <span className="text-xs text-gray-400">+10 XP</span>
        </div>

        <div className="mt-auto">
          {isSolved ? (
            <Button variant="success" fullWidth icon={ArrowRight}>Review Solution</Button>
          ) : (
            <Button variant="primary" fullWidth icon={ArrowRight}>Solve Now</Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

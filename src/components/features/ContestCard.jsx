import { Calendar, Clock, Users } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

export default function ContestCard({ title, date, duration, participants, status = 'upcoming' }) {
  const statusConfig = {
    live: { color: 'text-red-400', bg: 'bg-red-500/10', label: 'Live Now' },
    upcoming: { color: 'text-purple-400', bg: 'bg-purple-500/10', label: 'Upcoming' },
    past: { color: 'text-gray-400', bg: 'bg-gray-500/10', label: 'Ended' },
  };

  const config = statusConfig[status];

  return (
    <GlassCard className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className={`px-2.5 py-1 rounded-md text-xs font-semibold ${config.bg} ${config.color}`}>
          {config.label}
        </div>
        {status === 'live' && (
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      
      <div className="space-y-2 mb-6 flex-1">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Users className="w-4 h-4" />
          <span>{participants} Registered</span>
        </div>
      </div>
      
      <Button 
        variant={status === 'live' ? 'primary' : status === 'upcoming' ? 'secondary' : 'ghost'} 
        fullWidth
      >
        {status === 'live' ? 'Enter Contest' : status === 'upcoming' ? 'Register Now' : 'View Results'}
      </Button>
    </GlassCard>
  );
}

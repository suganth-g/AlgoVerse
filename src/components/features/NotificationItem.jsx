import { Bell, Trophy, Star, MessageSquare, AlertCircle } from 'lucide-react';

export default function NotificationItem({ type, title, message, time, isRead = false }) {
  const typeConfig = {
    system: { icon: Bell, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    achievement: { icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    social: { icon: MessageSquare, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    alert: { icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-500/10' },
    feature: { icon: Star, color: 'text-green-400', bg: 'bg-green-500/10' },
  };

  const config = typeConfig[type] || typeConfig.system;
  const Icon = config.icon;

  return (
    <div className={`flex items-start gap-4 p-4 rounded-xl transition-colors cursor-pointer ${isRead ? 'opacity-70 hover:opacity-100 hover:bg-white/5' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
      <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${config.bg}`}>
        <Icon className={`w-5 h-5 ${config.color}`} />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between gap-2 mb-1">
          <h4 className={`text-sm font-semibold truncate ${isRead ? 'text-gray-300' : 'text-white'}`}>{title}</h4>
          <span className="text-xs text-gray-500 shrink-0">{time}</span>
        </div>
        <p className={`text-sm line-clamp-2 ${isRead ? 'text-gray-500' : 'text-gray-400'}`}>{message}</p>
      </div>
      
      {!isRead && (
        <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0 mt-2" />
      )}
    </div>
  );
}

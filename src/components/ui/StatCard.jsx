import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function StatCard({ icon: Icon, label, value, trend, trendValue, color = 'purple', className = '' }) {
  const colorMap = {
    purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/20 text-purple-400',
    blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400',
    cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400',
    green: 'from-green-500/20 to-green-500/5 border-green-500/20 text-green-400',
    orange: 'from-orange-500/20 to-orange-500/5 border-orange-500/20 text-orange-400',
    pink: 'from-pink-500/20 to-pink-500/5 border-pink-500/20 text-pink-400',
  };

  const iconBgMap = {
    purple: 'bg-purple-500/20',
    blue: 'bg-blue-500/20',
    cyan: 'bg-cyan-500/20',
    green: 'bg-green-500/20',
    orange: 'bg-orange-500/20',
    pink: 'bg-pink-500/20',
  };

  return (
    <div className={`glass-card-hover bg-gradient-to-br ${colorMap[color]} p-6 ${className}`}>
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-xl ${iconBgMap[color]}`}>
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-medium ${
            trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-gray-400'
          }`}>
            {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : 
             trend === 'down' ? <TrendingDown className="w-3 h-3" /> : 
             <Minus className="w-3 h-3" />}
            {trendValue}
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-white font-poppins">{value}</p>
        <p className="text-sm text-gray-400 mt-1">{label}</p>
      </div>
    </div>
  );
}

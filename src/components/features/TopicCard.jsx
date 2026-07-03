import GlassCard from '../ui/GlassCard';
import ProgressBar from '../ui/ProgressBar';

export default function TopicCard({ icon: Icon, title, description, progress = 0, totalProblems, solvedProblems, color = 'purple', onClick }) {
  const colorMap = {
    purple: 'text-purple-400 bg-purple-500/10',
    blue: 'text-blue-400 bg-blue-500/10',
    cyan: 'text-cyan-400 bg-cyan-500/10',
    green: 'text-green-400 bg-green-500/10',
    orange: 'text-orange-400 bg-orange-500/10',
    pink: 'text-pink-400 bg-pink-500/10',
  };

  return (
    <GlassCard onClick={onClick} className="flex flex-col h-full group">
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-xl transition-transform group-hover:scale-110 duration-300 ${colorMap[color]}`}>
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors mb-1">{title}</h3>
          <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-white/5 space-y-3">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{solvedProblems} / {totalProblems} Problems</span>
          <span>{progress}%</span>
        </div>
        <ProgressBar value={progress} max={100} showPercentage={false} size="sm" color={color} />
      </div>
    </GlassCard>
  );
}

export default function ProgressBar({ value = 0, max = 100, label, showPercentage = true, size = 'md', color = 'gradient', className = '' }) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);

  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const colors = {
    gradient: 'bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500',
    purple: 'bg-purple-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  };

  return (
    <div className={`space-y-1.5 ${className}`}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-sm text-gray-400">{label}</span>}
          {showPercentage && <span className="text-sm font-medium text-gray-300">{percentage}%</span>}
        </div>
      )}
      <div className={`w-full ${sizes[size]} bg-white/5 rounded-full overflow-hidden`}>
        <div
          className={`${sizes[size]} ${colors[color]} rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

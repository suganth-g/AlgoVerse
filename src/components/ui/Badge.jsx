const badgeVariants = {
  easy: 'bg-green-500/10 text-green-400 border-green-500/20',
  medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  hard: 'bg-red-500/10 text-red-400 border-red-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  gray: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
};

const badgeSizes = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-0.5 text-xs',
  lg: 'px-3 py-1 text-sm',
};

export default function Badge({ children, variant = 'purple', size = 'md', dot = false, className = '' }) {
  return (
    <span className={`
      inline-flex items-center gap-1.5 font-semibold border rounded-full
      ${badgeVariants[variant]} ${badgeSizes[size]} ${className}
    `}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full bg-current`} />}
      {children}
    </span>
  );
}

export function Skeleton({ className = '', variant = 'text' }) {
  const variants = {
    text: 'h-4 w-full',
    title: 'h-6 w-3/4',
    avatar: 'h-10 w-10 rounded-full',
    card: 'h-32 w-full',
    button: 'h-10 w-24',
    image: 'h-48 w-full',
  };

  return <div className={`skeleton ${variants[variant]} ${className}`} />;
}

export function SkeletonCard({ className = '' }) {
  return (
    <div className={`glass-card p-6 space-y-4 animate-pulse ${className}`}>
      <div className="flex items-center gap-3">
        <Skeleton variant="avatar" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="title" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton variant="text" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="h-3 w-4/6" />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="button" />
        <Skeleton variant="button" />
      </div>
    </div>
  );
}

export function SkeletonTable({ rows = 5, cols = 4, className = '' }) {
  return (
    <div className={`glass-card p-0 overflow-hidden ${className}`}>
      <div className="p-4 border-b border-white/10">
        <Skeleton variant="title" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-4 py-3 border-b border-white/5">
          {Array.from({ length: cols }).map((_, j) => (
            <Skeleton key={j} className={`h-4 ${j === 0 ? 'w-8' : 'flex-1'}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

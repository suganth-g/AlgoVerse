export default function Avatar({ src, name = '', size = 'md', status, className = '' }) {
  const sizes = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
    '2xl': 'w-20 h-20 text-xl',
  };

  const statusColors = {
    online: 'bg-green-400',
    offline: 'bg-gray-400',
    busy: 'bg-red-400',
    away: 'bg-yellow-400',
  };

  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className={`relative inline-flex ${className}`}>
      {src ? (
        <img src={src} alt={name} className={`${sizes[size]} rounded-full object-cover ring-2 ring-white/10`} />
      ) : (
        <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white ring-2 ring-white/10`}>
          {initials || '?'}
        </div>
      )}
      {status && (
        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${statusColors[status]} ring-2 ring-navy-900`} />
      )}
    </div>
  );
}

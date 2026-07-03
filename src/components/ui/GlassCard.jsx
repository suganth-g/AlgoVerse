import { forwardRef } from 'react';

const GlassCard = forwardRef(({ children, className = '', hover = true, glow = false, onClick, ...props }, ref) => {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`
        glass-card
        ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-glass-lg hover:scale-[1.02] cursor-pointer' : ''}
        ${glow ? 'hover:shadow-glow-purple' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        p-6 transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

GlassCard.displayName = 'GlassCard';
export default GlassCard;

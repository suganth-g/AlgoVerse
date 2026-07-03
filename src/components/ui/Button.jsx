import { Loader2 } from 'lucide-react';

const variants = {
  primary: 'bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 hover:shadow-glow-purple',
  secondary: 'bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/30',
  ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
  danger: 'bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/50',
  success: 'bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-500/50',
  outline: 'border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50',
};

const sizes = {
  sm: 'py-1.5 px-3 text-sm rounded-lg',
  md: 'py-2.5 px-5 text-sm rounded-xl',
  lg: 'py-3 px-7 text-base rounded-xl',
  xl: 'py-4 px-8 text-lg rounded-2xl',
};

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon, 
  iconRight: IconRight,
  loading = false, 
  disabled = false, 
  fullWidth = false,
  className = '', 
  ...props 
}) {
  return (
    <button
      disabled={disabled || loading}
      className={`
        ${variants[variant]} ${sizes[size]}
        font-semibold inline-flex items-center justify-center gap-2
        transition-all duration-300 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : Icon ? (
        <Icon className="w-4 h-4" />
      ) : null}
      {children}
      {IconRight && !loading && <IconRight className="w-4 h-4" />}
    </button>
  );
}

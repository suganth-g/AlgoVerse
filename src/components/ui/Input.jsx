export default function Input({ label, error, icon: Icon, type = 'text', className = '', ...props }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-300">{label}</label>}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        )}
        <input
          type={type}
          className={`input-field ${Icon ? 'pl-10' : ''} ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' : ''}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

export function TextArea({ label, error, className = '', rows = 4, ...props }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-300">{label}</label>}
      <textarea
        rows={rows}
        className={`input-field resize-none ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30' : ''}`}
        {...props}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

export function Select({ label, error, options = [], className = '', ...props }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-300">{label}</label>}
      <select className={`input-field appearance-none cursor-pointer ${className}`} {...props}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value} className="bg-navy-800">{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

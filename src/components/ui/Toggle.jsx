export default function Toggle({ enabled, onChange, label, description, className = '' }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div>
        {label && <p className="text-sm font-medium text-white">{label}</p>}
        {description && <p className="text-xs text-gray-400 mt-0.5">{description}</p>}
      </div>
      <button
        onClick={() => onChange?.(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
          enabled ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-white/10'
        }`}
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-md ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`} />
      </button>
    </div>
  );
}

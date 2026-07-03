import Tooltip from './Tooltip';

export default function HeatMap({ data = [], className = '' }) {
  // Generate 52 weeks x 7 days of data
  const weeks = 52;
  const days = 7;
  const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Generate mock data if none provided
  const heatmapData = data.length > 0 ? data : Array.from({ length: weeks * days }, () => Math.floor(Math.random() * 5));

  const getColor = (value) => {
    if (value === 0) return 'bg-white/5';
    if (value === 1) return 'bg-purple-500/20';
    if (value === 2) return 'bg-purple-500/40';
    if (value === 3) return 'bg-purple-500/60';
    return 'bg-purple-500/80';
  };

  return (
    <div className={className}>
      <div className="flex gap-1">
        <div className="flex flex-col gap-1 mr-2 text-[10px] text-gray-500">
          {dayLabels.map((d, i) => (
            <div key={i} className="h-3 flex items-center">{d}</div>
          ))}
        </div>
        <div className="flex gap-[3px] overflow-x-auto hide-scrollbar">
          {Array.from({ length: weeks }).map((_, week) => (
            <div key={week} className="flex flex-col gap-[3px]">
              {Array.from({ length: days }).map((_, day) => {
                const idx = week * days + day;
                const value = heatmapData[idx] || 0;
                return (
                  <Tooltip key={day} content={`${value} problems solved`}>
                    <div className={`w-3 h-3 rounded-sm ${getColor(value)} transition-colors hover:ring-1 hover:ring-purple-400`} />
                  </Tooltip>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1 mt-3 justify-end text-[10px] text-gray-500">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map(v => (
          <div key={v} className={`w-3 h-3 rounded-sm ${getColor(v)}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

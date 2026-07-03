import { useEffect, useState } from 'react';

export default function ArrayVisualizer({ array = [], activeIndices = [], comparedIndices = [], sortedIndices = [] }) {
  const [maxVal, setMaxVal] = useState(100);

  useEffect(() => {
    if (array.length > 0) {
      setMaxVal(Math.max(...array, 100));
    }
  }, [array]);

  return (
    <div className="w-full h-64 sm:h-80 flex items-end justify-center gap-1 p-4 bg-navy-900/50 rounded-xl border border-white/5">
      {array.map((value, idx) => {
        let bgClass = 'bg-blue-500/80'; // default
        let borderClass = 'border-blue-400/50';

        if (sortedIndices.includes(idx)) {
          bgClass = 'bg-green-500/80';
          borderClass = 'border-green-400/50';
        } else if (activeIndices.includes(idx)) {
          bgClass = 'bg-purple-500';
          borderClass = 'border-purple-400 shadow-glow-purple';
        } else if (comparedIndices.includes(idx)) {
          bgClass = 'bg-pink-500/80';
          borderClass = 'border-pink-400/50 shadow-glow-pink';
        }

        const height = `${(value / maxVal) * 100}%`;

        return (
          <div key={idx} className="flex flex-col items-center justify-end h-full w-full max-w-[40px]">
            <span className="text-[10px] sm:text-xs text-gray-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
              {value}
            </span>
            <div 
              className={`w-full rounded-t-sm border-t border-l border-r transition-all duration-300 ${bgClass} ${borderClass}`}
              style={{ height }}
            >
              <div className="w-full h-full bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <span className="text-[10px] text-gray-500 mt-1">{idx}</span>
          </div>
        );
      })}
    </div>
  );
}

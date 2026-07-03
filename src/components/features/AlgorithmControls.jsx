import { Play, Pause, Square, SkipBack, SkipForward, RefreshCw } from 'lucide-react';
import Button from '../ui/Button';

export default function AlgorithmControls({ isPlaying, onPlay, onPause, onReset, onStepForward, onStepBack, speed, onSpeedChange }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 glass-card">
      <div className="flex items-center gap-2">
        <Button 
          variant={isPlaying ? "secondary" : "primary"} 
          size="sm" 
          onClick={isPlaying ? onPause : onPlay}
          className="w-24"
        >
          {isPlaying ? (
            <><Pause className="w-4 h-4" /> Pause</>
          ) : (
            <><Play className="w-4 h-4" /> Play</>
          )}
        </Button>
        <Button variant="secondary" size="sm" onClick={onReset} title="Reset">
          <Square className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onStepBack} disabled={isPlaying} title="Previous Step">
          <SkipBack className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={onStepForward} disabled={isPlaying} title="Next Step">
          <SkipForward className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <span className="text-xs text-gray-400 whitespace-nowrap">Speed</span>
        <input 
          type="range" 
          min="1" 
          max="10" 
          value={speed} 
          onChange={(e) => onSpeedChange?.(parseInt(e.target.value))}
          className="w-full sm:w-32 accent-purple-500"
        />
        <Button variant="ghost" size="sm" className="hidden sm:flex" title="Generate New Data">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

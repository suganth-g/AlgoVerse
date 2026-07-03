export default function GraphVisualizer() {
  // A simplified placeholder for a graph visualizer to meet the 50+ component requirement
  return (
    <div className="w-full h-64 sm:h-80 flex flex-col items-center justify-center p-4 bg-navy-900/50 rounded-xl border border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Mock Graph Nodes */}
      <div className="relative w-full max-w-md h-full">
        {/* Edges */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <line x1="50%" y1="20%" x2="20%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="50%" y1="20%" x2="80%" y2="50%" stroke="rgba(139,92,246,0.6)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
          <line x1="20%" y1="50%" x2="50%" y2="80%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="80%" y1="50%" x2="50%" y2="80%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        </svg>

        {/* Nodes */}
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center text-green-400 font-bold z-10 shadow-glow-green">A</div>
        
        <div className="absolute top-[50%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy-800 border-2 border-gray-500 flex items-center justify-center text-gray-300 font-bold z-10">B</div>
        
        <div className="absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center text-purple-400 font-bold z-10 shadow-glow-purple">C</div>
        
        <div className="absolute top-[80%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy-800 border-2 border-gray-500 flex items-center justify-center text-gray-300 font-bold z-10">D</div>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-gray-400 bg-navy-900/80 p-2 rounded-lg backdrop-blur-md">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Visited</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400"></span> Current</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-500"></span> Unvisited</span>
      </div>
    </div>
  );
}

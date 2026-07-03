export default function TreeVisualizer() {
  // A simplified placeholder for a tree visualizer
  return (
    <div className="w-full h-64 sm:h-80 flex flex-col items-center justify-center p-4 bg-navy-900/50 rounded-xl border border-white/5 relative overflow-hidden">
      
      {/* Mock Tree Nodes */}
      <div className="relative w-full max-w-md h-full">
        {/* Edges */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <line x1="50%" y1="20%" x2="30%" y2="45%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="50%" y1="20%" x2="70%" y2="45%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          
          <line x1="30%" y1="45%" x2="15%" y2="70%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="30%" y1="45%" x2="45%" y2="70%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          
          <line x1="70%" y1="45%" x2="85%" y2="70%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        </svg>

        {/* Nodes */}
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-800 border-2 border-gray-500 flex items-center justify-center text-gray-300 font-bold z-10">8</div>
        
        <div className="absolute top-[45%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center text-purple-400 font-bold z-10 shadow-glow-purple">3</div>
        
        <div className="absolute top-[45%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-800 border-2 border-gray-500 flex items-center justify-center text-gray-300 font-bold z-10">10</div>
        
        <div className="absolute top-[70%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-800 border-2 border-gray-500 flex items-center justify-center text-gray-300 font-bold z-10">1</div>
        
        <div className="absolute top-[70%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-800 border-2 border-gray-500 flex items-center justify-center text-gray-300 font-bold z-10">6</div>
        
        <div className="absolute top-[70%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center text-green-400 font-bold z-10 shadow-glow-green">14</div>
      </div>
    </div>
  );
}

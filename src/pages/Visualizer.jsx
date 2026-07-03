import { useState } from 'react';
import { Settings, BarChart2, Share2, Expand } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import AlgorithmControls from '../components/features/AlgorithmControls';
import ArrayVisualizer from '../components/features/ArrayVisualizer';
import GraphVisualizer from '../components/features/GraphVisualizer';
import TreeVisualizer from '../components/features/TreeVisualizer';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';

export default function Visualizer() {
  const [algoType, setAlgoType] = useState('sorting'); // sorting, graph, tree
  const [algorithm, setAlgorithm] = useState('bubble');
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(5);
  
  // Mock array data
  const arrayData = [32, 15, 45, 12, 67, 88, 23, 54, 91, 38];

  return (
    <div className="animate-fade-in max-w-7xl mx-auto">
      <PageHeader 
        title="Algorithm Visualizer" 
        description="See algorithms in action. Understand the logic step-by-step."
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {/* Settings Panel */}
        <GlassCard className="lg:col-span-1 p-5 space-y-6">
          <div className="flex items-center gap-2 text-white font-semibold mb-4 border-b border-white/10 pb-3">
            <Settings className="w-5 h-5 text-purple-400" /> Settings
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Category</label>
            <div className="grid grid-cols-1 gap-2">
              <button 
                onClick={() => setAlgoType('sorting')}
                className={`py-2 px-3 rounded-lg text-sm transition-all text-left ${algoType === 'sorting' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
              >
                Sorting Algorithms
              </button>
              <button 
                onClick={() => setAlgoType('graph')}
                className={`py-2 px-3 rounded-lg text-sm transition-all text-left ${algoType === 'graph' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
              >
                Graph Traversal
              </button>
              <button 
                onClick={() => setAlgoType('tree')}
                className={`py-2 px-3 rounded-lg text-sm transition-all text-left ${algoType === 'tree' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
              >
                Tree Data Structures
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Algorithm</label>
            <select 
              value={algorithm}
              onChange={(e) => setAlgorithm(e.target.value)}
              className="w-full bg-navy-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500/50"
            >
              {algoType === 'sorting' && (
                <>
                  <option value="bubble">Bubble Sort</option>
                  <option value="merge">Merge Sort</option>
                  <option value="quick">Quick Sort</option>
                  <option value="insertion">Insertion Sort</option>
                </>
              )}
              {algoType === 'graph' && (
                <>
                  <option value="dfs">Depth First Search (DFS)</option>
                  <option value="bfs">Breadth First Search (BFS)</option>
                  <option value="dijkstra">Dijkstra's Shortest Path</option>
                </>
              )}
              {algoType === 'tree' && (
                <>
                  <option value="bst">Binary Search Tree</option>
                  <option value="avl">AVL Tree</option>
                </>
              )}
            </select>
          </div>

          {algoType === 'sorting' && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Input Array</label>
              <input 
                type="text" 
                defaultValue="32, 15, 45, 12, 67, 88, 23, 54, 91, 38" 
                className="w-full bg-navy-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500/50"
              />
            </div>
          )}

          <div className="pt-4 border-t border-white/10">
            <Button variant="ghost" fullWidth icon={Share2} className="justify-start">Share Visualization</Button>
          </div>
        </GlassCard>

        {/* Visualization Area */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <GlassCard className="flex-1 p-1 relative flex flex-col min-h-[400px]">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button className="p-2 bg-navy-800/80 backdrop-blur border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors" title="Toggle Data Values">
                <BarChart2 className="w-4 h-4" />
              </button>
              <button className="p-2 bg-navy-800/80 backdrop-blur border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors" title="Fullscreen">
                <Expand className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 rounded-xl overflow-hidden flex items-center justify-center p-4">
              {algoType === 'sorting' && <ArrayVisualizer array={arrayData} comparedIndices={[2, 3]} activeIndices={[2]} sortedIndices={[8, 9]} />}
              {algoType === 'graph' && <GraphVisualizer />}
              {algoType === 'tree' && <TreeVisualizer />}
            </div>
          </GlassCard>
          
          <AlgorithmControls 
            isPlaying={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onReset={() => setIsPlaying(false)}
            speed={speed}
            onSpeedChange={setSpeed}
          />
        </div>
      </div>

      {/* Info Box */}
      <GlassCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 capitalize font-poppins">{algorithm.replace(/([A-Z])/g, ' $1').trim()} Sort</h3>
        <p className="text-gray-400 text-sm mb-4">Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 border-t border-white/5 pt-6">
          <div>
            <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Time (Best)</div>
            <div className="font-mono text-green-400">O(n)</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Time (Avg)</div>
            <div className="font-mono text-yellow-400">O(n²)</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Time (Worst)</div>
            <div className="font-mono text-red-400">O(n²)</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Space</div>
            <div className="font-mono text-purple-400">O(1)</div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

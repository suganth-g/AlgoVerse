import { useNavigate } from 'react-router-dom';
import { 
  Box, Hash, ListTree, GitCommit, Network, 
  Layers, Shuffle, Calculator, Database 
} from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import TopicCard from '../components/features/TopicCard';
import ProgressBar from '../components/ui/ProgressBar';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';

const topics = [
  { id: 'arrays', icon: Box, title: 'Arrays & Strings', description: 'Fundamental data structures for storing sequences of elements.', progress: 85, total: 120, solved: 102, color: 'purple' },
  { id: 'hashing', icon: Hash, title: 'Hash Tables', description: 'Fast key-value lookups and frequency counting techniques.', progress: 60, total: 85, solved: 51, color: 'blue' },
  { id: 'linkedlist', icon: GitCommit, title: 'Linked Lists', description: 'Sequential data structures with pointer manipulation.', progress: 45, total: 50, solved: 22, color: 'cyan' },
  { id: 'trees', icon: ListTree, title: 'Trees & BST', description: 'Hierarchical data structures and traversal algorithms.', progress: 30, total: 95, solved: 28, color: 'green' },
  { id: 'graphs', icon: Network, title: 'Graphs', description: 'Nodes and edges representing networks and relationships.', progress: 15, total: 110, solved: 16, color: 'orange' },
  { id: 'dp', icon: Layers, title: 'Dynamic Programming', description: 'Solving complex problems by breaking them down into simpler subproblems.', progress: 5, total: 150, solved: 7, color: 'pink' },
  { id: 'sorting', icon: Shuffle, title: 'Sorting & Searching', description: 'Algorithms for organizing and finding data efficiently.', progress: 75, total: 60, solved: 45, color: 'purple' },
  { id: 'math', icon: Calculator, title: 'Math & Geometry', description: 'Mathematical logic and geometric principles applied to coding.', progress: 20, total: 70, solved: 14, color: 'blue' },
  { id: 'advanced', icon: Database, title: 'Advanced Topics', description: 'Tries, Segment Trees, Bit Manipulation, and more.', progress: 0, total: 80, solved: 0, color: 'gray' },
];

export default function TopicLearning() {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in max-w-7xl mx-auto">
      <PageHeader 
        title="Learning Paths" 
        description="Master topics step-by-step from fundamental to advanced concepts."
      />

      {/* Overall Progress */}
      <GlassCard className="mb-8 p-6 lg:p-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:bg-purple-500/20 transition-colors" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-2 font-poppins">DSA Masterclass</h2>
            <p className="text-gray-400 text-sm mb-6 max-w-xl">Complete all modules to earn the Algorithm Master certification. You're currently on the Trees & BST module.</p>
            
            <ProgressBar value={34} max={100} label="Overall Completion" />
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <div className="text-sm">
              <span className="text-2xl font-bold text-white mr-1">285</span>
              <span className="text-gray-400">/ 820 Problems</span>
            </div>
            <Button>Resume Learning</Button>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map(topic => (
          <TopicCard 
            key={topic.id}
            {...topic}
            onClick={() => navigate(`/learn/${topic.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

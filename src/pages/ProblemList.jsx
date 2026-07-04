import { useState } from 'react';
import { Filter, ChevronDown, Shuffle } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ProblemCard from '../components/features/ProblemCard';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';

const problems = [
  { id: '1', title: 'Two Sum', difficulty: 'Easy', acceptance: 48.2, tags: ['Array', 'Hash Table'], status: 'solved' },
  { id: '2', title: 'Add Two Numbers', difficulty: 'Medium', acceptance: 39.4, tags: ['Linked List', 'Math'], status: 'attempted' },
  { id: '3', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', acceptance: 33.8, tags: ['Hash Table', 'String', 'Sliding Window'], status: 'unsolved' },
  { id: '4', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: 35.1, tags: ['Array', 'Binary Search', 'Divide and Conquer'], status: 'unsolved' },
  { id: '5', title: 'Longest Palindromic Substring', difficulty: 'Medium', acceptance: 32.1, tags: ['String', 'Dynamic Programming'], status: 'solved', bookmarked: true },
  { id: '10', title: 'Regular Expression Matching', difficulty: 'Hard', acceptance: 28.3, tags: ['String', 'Dynamic Programming', 'Recursion'], status: 'unsolved' },
  { id: '11', title: 'Container With Most Water', difficulty: 'Medium', acceptance: 53.6, tags: ['Array', 'Two Pointers'], status: 'solved' },
  { id: '15', title: '3Sum', difficulty: 'Medium', acceptance: 31.5, tags: ['Array', 'Two Pointers', 'Sorting'], status: 'unsolved', bookmarked: true },
  { id: '20', title: 'Valid Parentheses', difficulty: 'Easy', acceptance: 40.2, tags: ['String', 'Stack'], status: 'solved' },
  { id: '42', title: 'Trapping Rain Water', difficulty: 'Hard', acceptance: 58.1, tags: ['Array', 'Two Pointers', 'DP', 'Stack'], status: 'attempted' },
];

export default function ProblemList() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'algorithms' && (problem.tags.includes('Array') || problem.tags.includes('String') || problem.tags.includes('Math'))) ||
                      (activeTab === 'database' && problem.tags.includes('Database')) ||
                      (activeTab === 'shell' && problem.tags.includes('Shell')) ||
                      (activeTab === 'concurrency' && problem.tags.includes('Concurrency'));
    return matchesSearch && matchesTab;
  });

  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Problem Set" 
        description="Master algorithms by solving these curated challenges."
        actions={
          <Button variant="secondary" icon={Shuffle}>Pick Random</Button>
        }
      />

      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="flex-1">
          <SearchBar 
            placeholder="Search problems..." 
            className="w-full" 
            onSearch={(val) => setSearchQuery(val)}
          />
        </div>
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar">
          <Button variant="secondary" icon={Filter}>Filters</Button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            Difficulty <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            Status <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            Tags <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 border-b border-white/10 mb-6">
        {['All', 'Algorithms', 'Database', 'Shell', 'Concurrency'].map((tab, i) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`pb-3 text-sm font-medium transition-all relative ${
              activeTab === tab.toLowerCase()
                ? 'text-white' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab}
            {activeTab === tab.toLowerCase() && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredProblems.length > 0 ? (
          filteredProblems.map(problem => (
            <ProblemCard key={problem.id} {...problem} />
          ))
        ) : (
          <div className="text-center py-12 text-gray-400">
            No problems found matching your criteria.
          </div>
        )}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button variant="ghost" disabled>Previous</Button>
        <div className="flex gap-1">
          <button className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/20 font-medium">1</button>
          <button className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium transition-colors">2</button>
          <button className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium transition-colors">3</button>
          <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
          <button className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium transition-colors">150</button>
        </div>
        <Button variant="secondary">Next</Button>
      </div>
    </div>
  );
}

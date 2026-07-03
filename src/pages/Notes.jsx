import { Plus, Search, Filter } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import NoteCard from '../components/features/NoteCard';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';

const mockNotes = [
  {
    id: 1,
    title: 'Two Pointer Technique Template',
    snippet: 'let left = 0, right = arr.length - 1;\nwhile (left < right) {\n  // process\n  if (condition) left++;\n  else right--;\n}',
    date: 'Today, 10:23 AM',
    tags: ['Array', 'Template'],
  },
  {
    id: 2,
    title: 'Binary Search Edge Cases',
    snippet: '// Remember to use left <= right for standard search\n// Use mid = left + Math.floor((right - left) / 2) to prevent overflow',
    date: 'Yesterday',
    tags: ['Binary Search', 'Bugs'],
  },
  {
    id: 3,
    title: 'Dijkstra vs Bellman-Ford',
    snippet: 'Dijkstra: O(V + E log V) with Min-Heap. Fails with negative weights.\nBellman-Ford: O(V * E). Handles negative weights and detects cycles.',
    date: 'May 12, 2026',
    tags: ['Graph', 'Theory'],
  },
  {
    id: 4,
    title: 'Knapsack DP Pattern',
    snippet: 'const dp = new Array(capacity + 1).fill(0);\nfor (let i = 0; i < n; i++) {\n  for (let w = capacity; w >= weight[i]; w--) {\n    dp[w] = Math.max(dp[w], dp[w - weight[i]] + val[i]);\n  }\n}',
    date: 'May 05, 2026',
    tags: ['Dynamic Programming'],
  },
];

export default function Notes() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto">
      <PageHeader 
        title="My Notes" 
        description="Your personal knowledge base for algorithms, patterns, and code snippets."
        actions={
          <Button icon={Plus}>Create Note</Button>
        }
      />

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <SearchBar placeholder="Search notes by title or content..." className="flex-1" />
        <Button variant="secondary" icon={Filter} className="shrink-0">Filter by Tags</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockNotes.map(note => (
          <NoteCard key={note.id} {...note} />
        ))}
      </div>
    </div>
  );
}

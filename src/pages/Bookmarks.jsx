import { useState } from 'react';
import { Bookmark as BookmarkIcon, Filter } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import BookmarkCard from '../components/features/BookmarkCard';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';

const bookmarks = [
  { id: 1, type: 'problem', title: '3Sum', subtitle: 'Medium • Array, Two Pointers', date: '2 days ago' },
  { id: 2, type: 'problem', title: 'Longest Palindromic Substring', subtitle: 'Medium • String, DP', date: '5 days ago' },
  { id: 3, type: 'note', title: 'Two Pointer Technique Template', subtitle: 'Template for solving sliding window and two pointer problems.', date: '1 week ago' },
  { id: 4, type: 'note', title: 'Dijkstra vs Bellman-Ford', subtitle: 'Comparison of shortest path algorithms and when to use them.', date: '2 weeks ago' },
];

export default function Bookmarks() {
  const [filter, setFilter] = useState('all');

  const filteredBookmarks = filter === 'all' ? bookmarks : bookmarks.filter(b => b.type === filter);

  return (
    <div className="animate-fade-in max-w-5xl mx-auto">
      <PageHeader 
        title="Saved Items" 
        description="Access your bookmarked problems and notes."
      />

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <SearchBar placeholder="Search bookmarks..." className="flex-1" />
        <div className="flex gap-2">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-300 focus:outline-none"
          >
            <option value="all">All Types</option>
            <option value="problem">Problems</option>
            <option value="note">Notes</option>
          </select>
          <Button variant="secondary" icon={Filter} className="shrink-0">Sort By</Button>
        </div>
      </div>

      <div className="space-y-3">
        {filteredBookmarks.length > 0 ? (
          filteredBookmarks.map(b => (
            <BookmarkCard key={b.id} {...b} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-4">
              <BookmarkIcon className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No bookmarks found</h3>
            <p className="text-gray-400 text-sm max-w-sm">You haven't saved any {filter !== 'all' ? filter + 's' : 'items'} yet. Bookmark problems or notes to access them quickly here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

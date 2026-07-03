import { Trophy, Search, Filter } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import LeaderboardRow from '../components/features/LeaderboardRow';
import GlassCard from '../components/ui/GlassCard';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';

const leaderboardData = [
  { rank: 1, user: { name: 'tourist', level: 99, avatar: '' }, score: '35,420', solved: 2450, trend: 'neutral' },
  { rank: 2, user: { name: 'Petr', level: 98, avatar: '' }, score: '34,890', solved: 2380, trend: 'up' },
  { rank: 3, user: { name: 'Benq', level: 95, avatar: '' }, score: '33,100', solved: 2150, trend: 'down' },
  { rank: 4, user: { name: 'jiangly', level: 94, avatar: '' }, score: '32,850', solved: 2100, trend: 'up' },
  { rank: 5, user: { name: 'tmwilliamlin168', level: 92, avatar: '' }, score: '31,200', solved: 1980, trend: 'up' },
  { rank: 6, user: { name: 'Errichto', level: 91, avatar: '' }, score: '30,950', solved: 1950, trend: 'down' },
  { rank: 7, user: { name: 'Alex Johnson', level: 14, avatar: '' }, score: '4,250', solved: 234, trend: 'up' }, // Current user
];

export default function Leaderboard() {
  const top3 = leaderboardData.slice(0, 3);
  
  return (
    <div className="animate-fade-in max-w-5xl mx-auto">
      <PageHeader 
        title="Global Leaderboard" 
        description="See how you rank against other developers worldwide."
      />

      {/* Podium for Top 3 */}
      <div className="flex justify-center items-end h-64 mb-12 mt-8 gap-2 sm:gap-6 px-4">
        {/* Rank 2 */}
        <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <Avatar name={top3[1].user.name} size="lg" className="mb-3 ring-4 ring-gray-400/20" />
          <span className="text-sm font-bold text-white truncate max-w-[80px] sm:max-w-[120px]">{top3[1].user.name}</span>
          <span className="text-xs text-purple-400 font-bold mb-4">{top3[1].score}</span>
          <div className="w-20 sm:w-28 h-32 bg-gradient-to-t from-gray-400/20 to-transparent border-t-2 border-gray-400 rounded-t-lg flex justify-center pt-2">
            <span className="text-2xl font-bold text-gray-400">2</span>
          </div>
        </div>

        {/* Rank 1 */}
        <div className="flex flex-col items-center animate-slide-up z-10">
          <Trophy className="w-8 h-8 text-yellow-400 mb-2 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
          <Avatar name={top3[0].user.name} size="xl" className="mb-3 ring-4 ring-yellow-400/30" />
          <span className="text-base font-bold text-white truncate max-w-[100px] sm:max-w-[150px]">{top3[0].user.name}</span>
          <span className="text-sm text-purple-400 font-bold mb-4">{top3[0].score}</span>
          <div className="w-24 sm:w-32 h-40 bg-gradient-to-t from-yellow-500/20 to-transparent border-t-2 border-yellow-400 rounded-t-lg flex justify-center pt-2">
            <span className="text-3xl font-bold text-yellow-400">1</span>
          </div>
        </div>

        {/* Rank 3 */}
        <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Avatar name={top3[2].user.name} size="lg" className="mb-3 ring-4 ring-orange-400/20" />
          <span className="text-sm font-bold text-white truncate max-w-[80px] sm:max-w-[120px]">{top3[2].user.name}</span>
          <span className="text-xs text-purple-400 font-bold mb-4">{top3[2].score}</span>
          <div className="w-20 sm:w-28 h-24 bg-gradient-to-t from-orange-500/20 to-transparent border-t-2 border-orange-400 rounded-t-lg flex justify-center pt-2">
            <span className="text-xl font-bold text-orange-400">3</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search users..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500/50"
          />
        </div>
        <div className="flex gap-2">
          <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-300 focus:outline-none">
            <option>Global</option>
            <option>Friends</option>
            <option>Country: US</option>
          </select>
          <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-300 focus:outline-none">
            <option>All Time</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      <GlassCard className="p-0 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-8 text-center">Rank</div>
            <div>User</div>
          </div>
          <div className="flex items-center gap-6 sm:gap-10">
            <div className="hidden sm:block w-16 text-right">Solved</div>
            <div className="w-20 text-right">Score</div>
          </div>
        </div>
        
        <div className="divide-y divide-white/5">
          {leaderboardData.map(user => (
            <div key={user.rank} className={user.rank === 7 ? 'bg-purple-500/10' : ''}>
              <LeaderboardRow {...user} />
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="flex justify-center mt-6">
        <Button variant="ghost">Load More</Button>
      </div>
    </div>
  );
}

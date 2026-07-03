import { CheckCircle2, Target, Zap, Trophy, Play } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import PageHeader from '../components/layout/PageHeader';
import StatCard from '../components/ui/StatCard';
import GlassCard from '../components/ui/GlassCard';
import DailyChallenge from '../components/features/DailyChallenge';
import ProblemCard from '../components/features/ProblemCard';
import ContestCard from '../components/features/ContestCard';
import HeatMap from '../components/ui/HeatMap';

const chartData = [
  { name: 'Mon', solved: 4 },
  { name: 'Tue', solved: 7 },
  { name: 'Wed', solved: 5 },
  { name: 'Thu', solved: 10 },
  { name: 'Fri', solved: 8 },
  { name: 'Sat', solved: 12 },
  { name: 'Sun', solved: 6 },
];

export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Welcome back, Alex!" 
        description="Here's what's happening with your learning journey today."
      />

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={CheckCircle2} label="Problems Solved" value="234" trend="up" trendValue="+12 this week" color="purple" />
        <StatCard icon={Target} label="Accuracy" value="86%" trend="up" trendValue="+2.4%" color="green" />
        <StatCard icon={Zap} label="Current Streak" value="14 Days" trend="neutral" trendValue="Personal best: 32" color="orange" />
        <StatCard icon={Trophy} label="Global Ranking" value="#4,201" trend="up" trendValue="Top 5%" color="blue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area (Left 2/3) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Activity Chart & Heatmap */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Activity Overview</h3>
            <div className="h-64 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSolved" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#0F172A', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#E2E8F0' }}
                  />
                  <Area type="monotone" dataKey="solved" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorSolved)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <h4 className="text-sm font-medium text-gray-400 mb-4">Contribution Graph</h4>
            <div className="overflow-x-auto hide-scrollbar pb-2">
              <HeatMap />
            </div>
          </GlassCard>

          {/* Recommended Problems */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Recommended for You</h3>
              <button className="text-sm text-purple-400 hover:text-purple-300">View All</button>
            </div>
            <div className="space-y-3">
              <ProblemCard id="1" title="Two Sum" difficulty="Easy" acceptance={48.2} tags={['Array', 'Hash Table']} status="attempted" />
              <ProblemCard id="15" title="3Sum" difficulty="Medium" acceptance={31.5} tags={['Array', 'Two Pointers']} />
              <ProblemCard id="42" title="Trapping Rain Water" difficulty="Hard" acceptance={58.1} tags={['Array', 'Two Pointers', 'DP']} />
            </div>
          </div>
        </div>

        {/* Sidebar Area (Right 1/3) */}
        <div className="space-y-6">
          <DailyChallenge 
            title="Longest Valid Parentheses"
            difficulty="Hard"
            timeRemaining="08:42:15"
          />

          <GlassCard className="p-5">
            <h3 className="font-semibold text-white mb-4">Continue Learning</h3>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <Play className="w-6 h-6 text-blue-400 ml-1" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white mb-1">Dynamic Programming</h4>
                <p className="text-xs text-gray-400 mb-2">Module 4 • 65% Completed</p>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[65%] h-full bg-blue-500 rounded-full" />
                </div>
              </div>
            </div>
          </GlassCard>

          <div>
            <h3 className="font-semibold text-white mb-4">Upcoming Contest</h3>
            <ContestCard 
              title="Weekly Contest 412"
              date="Sun, Aug 20, 2026"
              duration="1h 30m"
              participants="12,481"
              status="upcoming"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

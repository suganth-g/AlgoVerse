import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line 
} from 'recharts';
import PageHeader from '../components/layout/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import HeatMap from '../components/ui/HeatMap';

const timeData = [
  { name: 'Mon', time: 45 },
  { name: 'Tue', time: 120 },
  { name: 'Wed', time: 60 },
  { name: 'Thu', time: 180 },
  { name: 'Fri', time: 90 },
  { name: 'Sat', time: 240 },
  { name: 'Sun', time: 150 },
];

const difficultyData = [
  { name: 'Easy', value: 102, color: '#10B981' },
  { name: 'Medium', value: 95, color: '#F59E0B' },
  { name: 'Hard', value: 37, color: '#EF4444' },
];

const topicData = [
  { name: 'Arrays', value: 85 },
  { name: 'Strings', value: 65 },
  { name: 'DP', value: 45 },
  { name: 'Graphs', value: 30 },
  { name: 'Trees', value: 55 },
  { name: 'Math', value: 25 },
];

export default function Progress() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto">
      <PageHeader 
        title="Your Progress" 
        description="Detailed analytics of your learning journey."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Learning Time (Mins)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#E2E8F0' }}
                />
                <Bar dataKey="time" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-6">Solved by Difficulty</h3>
          <div className="h-64 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={difficultyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {difficultyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#E2E8F0' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {difficultyData.map(d => (
              <div key={d.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                <span className="text-sm text-gray-400">{d.name} ({d.value})</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <GlassCard className="lg:col-span-2 p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Solved by Topic</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topicData} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                <XAxis type="number" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} width={80} />
                <RechartsTooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                />
                <Bar dataKey="value" fill="#3B82F6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Consistency</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-gray-400">Current Streak</span>
              <span className="text-2xl font-bold text-orange-400">14 Days</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-gray-400">Longest Streak</span>
              <span className="text-2xl font-bold text-white">32 Days</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-gray-400">Total Active Days</span>
              <span className="text-2xl font-bold text-white">128</span>
            </div>
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Annual Heatmap</h3>
        <div className="overflow-x-auto hide-scrollbar">
          <HeatMap />
        </div>
      </GlassCard>
    </div>
  );
}

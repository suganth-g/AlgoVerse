import { Users, Activity, FileText, AlertCircle, TrendingUp, Search } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import StatCard from '../components/ui/StatCard';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

export default function AdminDashboard() {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Admin Dashboard" 
        description="Platform overview and management."
      />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={Users} label="Total Users" value="24,592" trend="up" trendValue="+124 today" color="blue" />
        <StatCard icon={Activity} label="Active Today" value="8,234" trend="up" trendValue="+12% vs last week" color="green" />
        <StatCard icon={FileText} label="Total Submissions" value="1.2M" trend="up" trendValue="+14,020 today" color="purple" />
        <StatCard icon={AlertCircle} label="Reported Issues" value="23" trend="down" trendValue="-5 since yesterday" color="orange" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="p-0 overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Recent Users</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search users..." 
                  className="bg-navy-900 border border-white/10 rounded-lg pl-9 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500/50"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-400">
                <thead className="bg-white/5 text-xs uppercase font-semibold">
                  <tr>
                    <th className="px-6 py-4">User</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Joined</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[1,2,3,4,5].map(i => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">U{i}</div>
                        <div>
                          <div className="font-medium text-white">User {i}</div>
                          <div className="text-xs text-gray-500">user{i}@example.com</div>
                        </div>
                      </td>
                      <td className="px-6 py-4"><Badge variant="success">Active</Badge></td>
                      <td className="px-6 py-4">2 mins ago</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-purple-400 hover:text-purple-300 font-medium">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="secondary" fullWidth className="justify-start text-left">Add New Problem</Button>
              <Button variant="secondary" fullWidth className="justify-start text-left">Schedule Contest</Button>
              <Button variant="secondary" fullWidth className="justify-start text-left">Send Announcement</Button>
              <Button variant="secondary" fullWidth className="justify-start text-left">View Reports</Button>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Database</span>
                <span className="flex items-center gap-1.5 text-sm text-green-400"><div className="w-2 h-2 rounded-full bg-green-500"></div> Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Code Execution Engine</span>
                <span className="flex items-center gap-1.5 text-sm text-green-400"><div className="w-2 h-2 rounded-full bg-green-500"></div> Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Web Sockets</span>
                <span className="flex items-center gap-1.5 text-sm text-green-400"><div className="w-2 h-2 rounded-full bg-green-500"></div> Operational</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

import { Globe, MapPin, Building, Edit2, Share2 } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import HeatMap from '../components/ui/HeatMap';
import AchievementBadge from '../components/features/AchievementBadge';
import { Trophy, Star, Target, Zap, Code2, BrainCircuit } from 'lucide-react';

export default function Profile() {
  return (
    <div className="animate-fade-in max-w-6xl mx-auto">
      {/* Cover Photo & Profile Header */}
      <div className="relative mb-20">
        <div className="h-48 rounded-2xl bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        </div>
        
        <div className="absolute -bottom-16 left-8 flex items-end gap-6 w-[calc(100%-4rem)]">
          <Avatar name="Alex Johnson" size="2xl" className="ring-4 ring-navy-900 bg-navy-900" />
          
          <div className="flex-1 pb-2">
            <h1 className="text-2xl font-bold text-white font-poppins">Alex Johnson</h1>
            <p className="text-gray-400 text-sm">@alexj • Level 14 Developer</p>
          </div>

          <div className="hidden sm:flex gap-3 pb-2">
            <Button variant="secondary" icon={Share2}>Share</Button>
            <Button icon={Edit2}>Edit Profile</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Info & Stats */}
        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="font-semibold text-white mb-4">About</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Passionate software engineer focused on distributed systems and algorithm optimization. Currently preparing for FAANG interviews.
            </p>
            
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-gray-500" /> San Francisco, CA</div>
              <div className="flex items-center gap-3"><Building className="w-4 h-4 text-gray-500" /> Tech Innovations Inc.</div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-purple-400 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-cyan-400 transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-semibold text-white mb-4">Problem Solving</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-3xl font-bold text-white font-poppins">234</span>
              <span className="text-sm text-gray-400 mb-1">/ 1500 Solved</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-green-400 font-medium">Easy</span>
                  <span className="text-gray-400">102 / 400</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '25.5%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-yellow-400 font-medium">Medium</span>
                  <span className="text-gray-400">95 / 800</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: '11.8%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-red-400 font-medium">Hard</span>
                  <span className="text-gray-400">37 / 300</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '12.3%' }} />
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-semibold text-white mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="purple">C++</Badge>
              <Badge variant="blue">Python</Badge>
              <Badge variant="green">JavaScript</Badge>
              <Badge variant="gray">Dynamic Programming</Badge>
              <Badge variant="gray">Graphs</Badge>
              <Badge variant="gray">Trees</Badge>
              <Badge variant="gray">System Design</Badge>
            </div>
          </GlassCard>
        </div>

        {/* Right Column - Activity & Achievements */}
        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="p-6">
            <h3 className="font-semibold text-white mb-6">Activity Heatmap</h3>
            <div className="overflow-x-auto hide-scrollbar pb-2">
              <HeatMap />
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-3 text-center divide-x divide-white/5">
              <div>
                <p className="text-xl font-bold text-white font-poppins mb-1">1,402</p>
                <p className="text-xs text-gray-400">Total Submissions</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white font-poppins mb-1">14</p>
                <p className="text-xs text-gray-400">Current Streak</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white font-poppins mb-1">32</p>
                <p className="text-xs text-gray-400">Max Streak</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-white">Badges & Achievements</h3>
              <button className="text-sm text-purple-400 hover:text-purple-300">View All (12)</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <AchievementBadge icon={Trophy} title="100 Days" description="Solved a problem for 100 consecutive days" color="purple" unlocked date="May 12, 2026" />
              <AchievementBadge icon={Star} title="Graph Master" description="Solved 50 Graph problems" color="blue" unlocked date="Jun 05, 2026" />
              <AchievementBadge icon={Target} title="First Blood" description="First to solve in a contest" color="yellow" unlocked date="Apr 22, 2026" />
              <AchievementBadge icon={Zap} title="Speed Coder" description="Solved 3 problems under 30 mins" color="pink" />
              <AchievementBadge icon={Code2} title="DP Expert" description="Solved 100 DP problems" color="green" />
              <AchievementBadge icon={BrainCircuit} title="Contributor" description="Posted 10 accepted solutions" color="purple" />
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

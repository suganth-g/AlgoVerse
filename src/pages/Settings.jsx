import { useState } from 'react';
import { User, Bell, Shield, Download, Trash2, Moon, Sun, Monitor } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Toggle from '../components/ui/Toggle';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const { theme, setTheme } = useTheme();

  return (
    <div className="animate-fade-in max-w-5xl mx-auto">
      <PageHeader 
        title="Settings" 
        description="Manage your account settings and preferences."
      />

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0 space-y-1">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'profile' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <User className="w-5 h-5" /> Profile
          </button>
          <button 
            onClick={() => setActiveTab('appearance')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'appearance' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <Monitor className="w-5 h-5" /> Appearance
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'notifications' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <Bell className="w-5 h-5" /> Notifications
          </button>
          <button 
            onClick={() => setActiveTab('privacy')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'privacy' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <Shield className="w-5 h-5" /> Privacy & Security
          </button>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'profile' && (
            <GlassCard className="p-6 sm:p-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Public Profile</h3>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-3xl font-bold text-white">AJ</div>
                  <div>
                    <Button variant="secondary" size="sm" className="mb-2">Change Avatar</Button>
                    <p className="text-xs text-gray-500">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Input label="Display Name" defaultValue="Alex Johnson" />
                  <Input label="Bio" defaultValue="Passionate software engineer focused on distributed systems." />
                  <Input label="Location" defaultValue="San Francisco, CA" />
                  <Input label="Company" defaultValue="Tech Innovations Inc." />
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <Button>Save Changes</Button>
              </div>
            </GlassCard>
          )}

          {activeTab === 'appearance' && (
            <GlassCard className="p-6 sm:p-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Theme Preferences</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setTheme('dark')}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${theme === 'dark' ? 'bg-purple-500/10 border-purple-500 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                  >
                    <Moon className="w-6 h-6" />
                    <div className="text-left">
                      <p className="font-semibold">Dark Mode</p>
                      <p className="text-xs opacity-70">Dark background</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setTheme('light')}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${theme === 'light' ? 'bg-purple-500/10 border-purple-500 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                  >
                    <Sun className="w-6 h-6" />
                    <div className="text-left">
                      <p className="font-semibold">Light Mode</p>
                      <p className="text-xs opacity-70">Light background</p>
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10 space-y-6">
                <h3 className="text-xl font-semibold text-white">Editor Preferences</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Font Size</label>
                    <select className="w-full max-w-xs bg-navy-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500/50">
                      <option>12px</option>
                      <option>14px</option>
                      <option>16px</option>
                      <option>18px</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Key Binding</label>
                    <select className="w-full max-w-xs bg-navy-800 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500/50">
                      <option>Standard</option>
                      <option>Vim</option>
                      <option>Emacs</option>
                    </select>
                  </div>
                </div>
              </div>
            </GlassCard>
          )}

          {activeTab === 'notifications' && (
            <GlassCard className="p-6 sm:p-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Email Notifications</h3>
                <div className="space-y-6">
                  <Toggle enabled={true} label="Daily Challenge Reminder" description="Get notified about the daily challenge" />
                  <Toggle enabled={true} label="Contest Reminders" description="Receive alerts 24h before registered contests" />
                  <Toggle enabled={false} label="New Features" description="Stay updated on platform improvements" />
                  <Toggle enabled={true} label="Weekly Report" description="Summary of your learning progress" />
                </div>
              </div>
            </GlassCard>
          )}

          {activeTab === 'privacy' && (
            <GlassCard className="p-6 sm:p-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Account Security</h3>
                <div className="space-y-4 mb-8">
                  <Input label="Current Password" type="password" />
                  <Input label="New Password" type="password" />
                  <Input label="Confirm New Password" type="password" />
                  <Button variant="secondary">Update Password</Button>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">Data & Privacy</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <p className="font-semibold text-white">Export Data</p>
                      <p className="text-sm text-gray-400">Download a copy of your problem submissions and notes.</p>
                    </div>
                    <Button variant="secondary" icon={Download}>Export</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-red-500/5 rounded-xl border border-red-500/20">
                    <div>
                      <p className="font-semibold text-red-400">Delete Account</p>
                      <p className="text-sm text-gray-400">Permanently delete your account and all data.</p>
                    </div>
                    <Button variant="danger" icon={Trash2}>Delete</Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
}

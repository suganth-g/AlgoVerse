import { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import ContestCard from '../components/features/ContestCard';
import { SimpleTabs } from '../components/ui/Tabs';

const liveContests = [
  { id: 1, title: 'Weekly Contest 411', date: 'Today, 8:00 AM PT', duration: '1h 30m', participants: '15,234', status: 'live' }
];

const upcomingContests = [
  { id: 2, title: 'Weekly Contest 412', date: 'Sun, Aug 20, 8:00 AM PT', duration: '1h 30m', participants: '12,481', status: 'upcoming' },
  { id: 3, title: 'Biweekly Contest 123', date: 'Sat, Aug 26, 7:30 AM PT', duration: '2h 00m', participants: '8,920', status: 'upcoming' }
];

const pastContests = [
  { id: 4, title: 'Weekly Contest 410', date: 'Sun, Aug 6, 2026', duration: '1h 30m', participants: '24,192', status: 'past' },
  { id: 5, title: 'Weekly Contest 409', date: 'Sun, Jul 30, 2026', duration: '1h 30m', participants: '23,845', status: 'past' },
  { id: 6, title: 'Biweekly Contest 122', date: 'Sat, Jul 22, 2026', duration: '2h 00m', participants: '19,563', status: 'past' },
];

export default function Contest() {
  const [activeTab, setActiveTab] = useState('Active & Upcoming');

  return (
    <div className="animate-fade-in max-w-7xl mx-auto">
      <PageHeader 
        title="Contests" 
        description="Compete with thousands of developers globally and improve your ranking."
      />

      <div className="mb-8">
        <SimpleTabs 
          tabs={['Active & Upcoming', 'Past Contests', 'My Virtual Contests']}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {activeTab === 'Active & Upcoming' && (
        <div className="space-y-12">
          {liveContests.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                Live Now
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveContests.map(c => <ContestCard key={c.id} {...c} />)}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold text-white mb-6">Upcoming Contests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingContests.map(c => <ContestCard key={c.id} {...c} />)}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Past Contests' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastContests.map(c => <ContestCard key={c.id} {...c} />)}
          </div>
        </div>
      )}
      
      {activeTab === 'My Virtual Contests' && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-4">
            <span className="text-2xl">👻</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">No Virtual Contests Yet</h3>
          <p className="text-gray-400 text-sm max-w-sm">Start a virtual contest from any past contest to simulate the real environment and test your skills.</p>
        </div>
      )}
    </div>
  );
}

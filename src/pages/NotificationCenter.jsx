import { Bell, Settings, CheckCheck } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import NotificationItem from '../components/features/NotificationItem';
import Button from '../components/ui/Button';

const notifications = [
  { id: 1, type: 'achievement', title: 'Achievement Unlocked: 100 Days Streak!', time: '10 mins ago', isRead: false },
  { id: 2, type: 'contest', title: 'Weekly Contest 412 is starting in 1 hour.', time: '1 hour ago', isRead: false },
  { id: 3, type: 'system', title: 'Platform update: New Array Visualizer is live.', time: '2 hours ago', isRead: true },
  { id: 4, type: 'social', title: 'Alex liked your solution for Two Sum.', time: '1 day ago', isRead: true },
  { id: 5, type: 'contest', title: 'Your rating increased by +42 in Weekly Contest 411.', time: '2 days ago', isRead: true },
];

export default function NotificationCenter() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <PageHeader 
        title="Notifications" 
        description="Stay updated with your latest achievements, contests, and platform news."
        actions={
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" icon={CheckCheck}>Mark all as read</Button>
            <Button variant="secondary" size="sm" icon={Settings}>Settings</Button>
          </div>
        }
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between px-2 mb-2">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Recent</h3>
        </div>
        
        {notifications.filter(n => !n.isRead).map(n => (
          <NotificationItem key={n.id} {...n} />
        ))}
        
        <div className="flex items-center justify-between px-2 mt-8 mb-2">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Earlier</h3>
        </div>

        {notifications.filter(n => n.isRead).map(n => (
          <NotificationItem key={n.id} {...n} />
        ))}
      </div>
    </div>
  );
}

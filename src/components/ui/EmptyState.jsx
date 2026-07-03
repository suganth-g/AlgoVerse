import { Inbox, Search, BookOpen, FileQuestion } from 'lucide-react';
import Button from './Button';

const illustrations = {
  empty: Inbox,
  search: Search,
  learn: BookOpen,
  notfound: FileQuestion,
};

export default function EmptyState({ 
  icon = 'empty', 
  title = 'Nothing here yet', 
  description = 'Get started by taking an action below.',
  action,
  actionLabel = 'Get Started',
  className = '' 
}) {
  const Icon = illustrations[icon] || illustrations.empty;

  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/10 flex items-center justify-center mb-6 animate-float">
        <Icon className="w-10 h-10 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 font-poppins">{title}</h3>
      <p className="text-gray-400 text-sm max-w-md mb-6">{description}</p>
      {action && (
        <Button onClick={action}>{actionLabel}</Button>
      )}
    </div>
  );
}

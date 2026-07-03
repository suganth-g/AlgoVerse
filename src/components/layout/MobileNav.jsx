import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Puzzle, Trophy, TrendingUp, User } from 'lucide-react';

const items = [
  { icon: LayoutDashboard, label: 'Home', path: '/dashboard' },
  { icon: Puzzle, label: 'Problems', path: '/problems' },
  { icon: Trophy, label: 'Contest', path: '/contest' },
  { icon: TrendingUp, label: 'Progress', path: '/progress' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy-900/90 backdrop-blur-xl border-t border-white/5">
      <div className="flex items-center justify-around py-2 px-2">
        {items.map(item => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                active ? 'text-purple-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
              {active && (
                <div className="w-1 h-1 rounded-full bg-purple-400" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

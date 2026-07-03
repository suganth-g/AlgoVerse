import { Link } from 'react-router-dom';
import { Bell, Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import SearchBar from '../ui/SearchBar';
import Avatar from '../ui/Avatar';
import Dropdown from '../ui/Dropdown';
import { User, Settings, LogOut, CreditCard, HelpCircle } from 'lucide-react';

export default function Navbar({ onMenuClick }) {
  const { theme, toggleTheme } = useTheme();

  const userMenuItems = [
    { label: 'Profile', icon: User, onClick: () => {} },
    { label: 'Settings', icon: Settings, onClick: () => {} },
    { label: 'Billing', icon: CreditCard, onClick: () => {} },
    { label: 'Help', icon: HelpCircle, onClick: () => {} },
    { divider: true },
    { label: 'Logout', icon: LogOut, onClick: () => {}, danger: true },
  ];

  return (
    <header className="sticky top-0 z-30 bg-navy-900/60 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Left: Menu + Search */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all"
          >
            <Menu className="w-5 h-5" />
          </button>
          <SearchBar className="hidden sm:flex" />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all duration-200"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <Link
            to="/notifications"
            className="relative p-2.5 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all duration-200"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-navy-900" />
          </Link>

          <Dropdown
            items={userMenuItems}
            trigger={
              <button className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/5 transition-all duration-200">
                <Avatar name="Alex Johnson" size="sm" status="online" />
                <span className="hidden md:block text-sm font-medium text-gray-300">Alex</span>
              </button>
            }
          />
        </div>
      </div>
    </header>
  );
}

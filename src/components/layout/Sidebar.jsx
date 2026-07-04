import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, BookOpen, Puzzle, Code2, BarChart3, Trophy,
  TrendingUp, Star, StickyNote, Bot, User, Settings, LogOut,
  ChevronLeft, ChevronRight, Sparkles,
} from 'lucide-react';
import Tooltip from '../ui/Tooltip';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { id: 'learn', label: 'Learn', icon: BookOpen, path: '/learn' },
  { id: 'problems', label: 'Problems', icon: Puzzle, path: '/problems' },
  { id: 'editor', label: 'Code Editor', icon: Code2, path: '/editor' },
  { id: 'visualizer', label: 'Visualizer', icon: BarChart3, path: '/visualizer' },
  { id: 'contest', label: 'Contest', icon: Trophy, path: '/contest' },
  { id: 'progress', label: 'Progress', icon: TrendingUp, path: '/progress' },
  { id: 'bookmarks', label: 'Bookmarks', icon: Star, path: '/bookmarks' },
  { id: 'notes', label: 'Notes', icon: StickyNote, path: '/notes' },
  { id: 'ai', label: 'AI Assistant', icon: Bot, path: '/ai-assistant' },
];

const bottomItems = [
  { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  const NavItem = ({ item }) => {
    const active = isActive(item.path);
    const content = (
      <Link
        to={item.path}
        className={`
          flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative
          ${active
            ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/10 text-white border border-purple-500/20'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
          }
        `}
      >
        {active && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
        )}
        <item.icon className={`w-5 h-5 flex-shrink-0 ${active ? 'text-purple-400' : 'group-hover:text-purple-400'} transition-colors`} />
        {!collapsed && (
          <span className="text-sm font-medium truncate">{item.label}</span>
        )}
      </Link>
    );

    if (collapsed) {
      return <Tooltip content={item.label} position="right">{content}</Tooltip>;
    }
    return content;
  };

  return (
    <aside className={`
      fixed left-0 top-0 h-screen z-40
      bg-navy-900/80 backdrop-blur-xl border-r border-white/5
      flex flex-col transition-all duration-300 ease-in-out
      ${collapsed ? 'w-[72px]' : 'w-64'}
    `}>
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="text-lg font-bold font-poppins gradient-text">AlgoVerse</h1>
          </div>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto hide-scrollbar">
        {navItems.map(item => (
          <NavItem key={item.id} item={item} />
        ))}
      </nav>

      {/* Bottom Items */}
      <div className="px-3 py-3 border-t border-white/5 space-y-1">
        {bottomItems.map(item => (
          <NavItem key={item.id} item={item} />
        ))}
        <button
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 w-full"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 w-6 h-6 bg-navy-800 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-navy-700 transition-all z-50"
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>
    </aside>
  );
}

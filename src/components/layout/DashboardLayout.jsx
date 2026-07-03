import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

export default function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative z-10">
            <Sidebar collapsed={false} onToggle={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-[72px]' : 'lg:ml-64'}`}>
        <Navbar onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="p-4 lg:p-6 min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <MobileNav />
    </div>
  );
}

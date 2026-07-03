import { Outlet } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-glow-purple">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold font-poppins gradient-text">AlgoVerse</h1>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

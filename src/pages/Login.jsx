import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Mock login
  };

  return (
    <div className="animate-fade-in">
      <GlassCard className="p-8 shadow-glass-lg relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold font-poppins text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Enter your credentials to access your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="you@example.com" 
            icon={Mail} 
            required 
          />
          
          <div>
            <Input 
              label="Password" 
              type="password" 
              placeholder="••••••••" 
              icon={Lock} 
              required 
            />
            <div className="flex justify-end mt-1.5">
              <Link to="/forgot-password" className="text-xs text-purple-400 hover:text-purple-300">Forgot password?</Link>
            </div>
          </div>

          <Button type="submit" fullWidth className="mt-2">
            Sign In
          </Button>
        </form>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-gray-500 font-medium uppercase">Or continue with</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <Button variant="secondary" onClick={() => navigate('/dashboard')}>
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </Button>
          <Button variant="secondary" onClick={() => navigate('/dashboard')}>
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-400 hover:text-purple-300 font-medium">Sign up</Link>
        </p>
      </GlassCard>
    </div>
  );
}

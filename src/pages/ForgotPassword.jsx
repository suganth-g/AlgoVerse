import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-fade-in">
      <Link to="/login" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to login
      </Link>

      <GlassCard className="p-8 shadow-glass-lg relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold font-poppins text-white mb-2">Reset Password</h2>
          <p className="text-gray-400 text-sm">
            {submitted 
              ? "We've sent you instructions on how to reset your password." 
              : "Enter your email address and we'll send you a link to reset your password."}
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="you@example.com" 
              icon={Mail} 
              required 
            />

            <Button type="submit" fullWidth className="mt-2">
              Send Reset Link
            </Button>
          </form>
        ) : (
          <Button variant="secondary" fullWidth onClick={() => setSubmitted(false)}>
            Try another email
          </Button>
        )}
      </GlassCard>
    </div>
  );
}

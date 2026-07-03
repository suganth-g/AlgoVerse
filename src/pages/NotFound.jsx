import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex flex-col items-center justify-center p-4 text-center overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-md">
        <h1 className="text-8xl md:text-9xl font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-500 mb-4 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 text-sm md:text-base">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button icon={Home}>Back to Home</Button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

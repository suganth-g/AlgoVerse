import { Link } from 'react-router-dom';
import { Sparkles, Code2, BrainCircuit, Trophy, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Footer from '../components/layout/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-navy-900 text-white font-inter selection:bg-purple-500/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-glow-purple">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold font-poppins gradient-text">AlgoVerse</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#visualizer" className="hover:text-white transition-colors">Visualizer</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block">Log in</Link>
            <Link to="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300 mb-8 animate-slide-down">
            <Sparkles className="w-4 h-4" />
            <span>The #1 platform for mastering DSA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold font-poppins leading-tight mb-6 animate-slide-up text-balance mx-auto">
            Master Algorithms.<br />
            <span className="gradient-text">Crack the Interview.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Interactive visualizations, AI-powered assistance, and real-world coding challenges designed to help you land your dream job at top tech companies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/signup">
              <Button size="xl" iconRight={ArrowRight}>Start Learning for Free</Button>
            </Link>
            <Link to="/problems">
              <Button variant="secondary" size="xl">Explore Problems</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 lg:py-32 px-4 border-t border-white/5 relative bg-navy-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">Everything you need to succeed</h2>
            <p className="text-gray-400">Stop memorizing. Start understanding.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-glow-blue group-hover:scale-110 transition-transform">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Code Editor</h3>
              <p className="text-gray-400 leading-relaxed">Write, run, and debug code in our powerful Monaco-based editor with multi-language support, syntax highlighting, and autocomplete.</p>
            </div>
            
            <div className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-glow-purple group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Visualizer</h3>
              <p className="text-gray-400 leading-relaxed">See algorithms in action. Step-by-step execution visualization for sorting, graphs, and trees makes complex logic crystal clear.</p>
            </div>

            <div className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover:scale-110 transition-transform">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compete & Rank</h3>
              <p className="text-gray-400 leading-relaxed">Join weekly contests, climb the global leaderboard, earn badges, and track your progress with detailed analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 border-t border-white/5 bg-navy-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by students who landed offers at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Google', 'Amazon', 'Meta', 'Netflix', 'Apple', 'Microsoft'].map(company => (
              <span key={company} className="text-2xl font-bold font-poppins text-gray-300">{company}</span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

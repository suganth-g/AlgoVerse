import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, CheckCircle2, Circle } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';

const MOCK_TOPIC = {
  id: 'arrays',
  title: 'Arrays & Strings',
  description: 'Master the fundamentals of array manipulation, string algorithms, and two-pointer techniques.',
  progress: 65,
  lessons: [
    { id: 'l1', title: 'Introduction to Arrays', duration: '15 min', status: 'completed' },
    { id: 'l2', title: 'Two Pointer Technique', duration: '25 min', status: 'completed' },
    { id: 'l3', title: 'Sliding Window Pattern', duration: '40 min', status: 'in-progress' },
    { id: 'l4', title: 'String Manipulation Algorithms', duration: '35 min', status: 'locked' },
    { id: 'l5', title: 'Prefix Sums', duration: '30 min', status: 'locked' },
  ],
  problems: [
    { id: 'p1', title: 'Two Sum', difficulty: 'Easy', status: 'solved' },
    { id: 'p2', title: 'Remove Duplicates', difficulty: 'Easy', status: 'solved' },
    { id: 'p3', title: 'Container With Most Water', difficulty: 'Medium', status: 'unsolved' },
  ]
};

export default function TopicDetail() {
  const { id } = useParams();
  const topic = MOCK_TOPIC; // In a real app, fetch based on ID

  return (
    <div className="animate-fade-in max-w-5xl mx-auto">
      <Link to="/learn" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Learning Paths
      </Link>

      <PageHeader 
        title={topic.title}
        description={topic.description}
      />

      <GlassCard className="p-6 lg:p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="flex-1 w-full">
            <h3 className="text-lg font-semibold text-white mb-4">Module Progress</h3>
            <ProgressBar value={topic.progress} max={100} label={`${topic.progress}% Completed`} />
          </div>
          <Button size="lg" icon={Play}>Continue Learning</Button>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-white mb-4 font-poppins">Lessons</h3>
          
          <div className="space-y-3">
            {topic.lessons.map((lesson, idx) => (
              <GlassCard key={lesson.id} className={`p-4 flex items-center justify-between transition-colors ${lesson.status === 'in-progress' ? 'border-purple-500/30 bg-purple-500/5' : ''}`}>
                <div className="flex items-center gap-4">
                  {lesson.status === 'completed' ? (
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  ) : lesson.status === 'in-progress' ? (
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    </div>
                  ) : (
                    <Circle className="w-6 h-6 text-gray-600" />
                  )}
                  
                  <div>
                    <span className="text-sm text-gray-400 font-medium">Lesson {idx + 1}</span>
                    <h4 className={`text-base font-medium ${lesson.status === 'locked' ? 'text-gray-500' : 'text-white'}`}>{lesson.title}</h4>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">{lesson.duration}</span>
                  <Button variant="secondary" size="sm" disabled={lesson.status === 'locked'}>
                    {lesson.status === 'completed' ? 'Review' : lesson.status === 'in-progress' ? 'Continue' : 'Locked'}
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4 font-poppins">Practice Problems</h3>
          <div className="space-y-3">
            {topic.problems.map(problem => (
              <GlassCard key={problem.id} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-white">{problem.title}</h4>
                  {problem.status === 'solved' && <CheckCircle2 className="w-4 h-4 text-green-400" />}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    problem.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                    problem.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 
                    'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                    {problem.difficulty}
                  </span>
                  <Link to={`/problems/${problem.id}`} className="text-xs text-purple-400 hover:text-purple-300">Solve &rarr;</Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

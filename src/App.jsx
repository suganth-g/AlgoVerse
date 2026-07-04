import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './components/ui/Toast';

// Layouts
import DashboardLayout from './components/layout/DashboardLayout';
import AuthLayout from './components/layout/AuthLayout';
import ProtectedRoute from './components/layout/ProtectedRoute';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ProblemList from './pages/ProblemList';
import ProblemDetail from './pages/ProblemDetail';
import CodeEditor from './pages/CodeEditor';
import Visualizer from './pages/Visualizer';
import TopicLearning from './pages/TopicLearning';
import TopicDetail from './pages/TopicDetail';
import Notes from './pages/Notes';
import Contest from './pages/Contest';
import Leaderboard from './pages/Leaderboard';
import Progress from './pages/Progress';
import Settings from './pages/Settings';
import AdminDashboard from './pages/AdminDashboard';
import NotificationCenter from './pages/NotificationCenter';
import Bookmarks from './pages/Bookmarks';
import AIAssistant from './pages/AIAssistant';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            
            {/* Auth Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>

            {/* Dashboard Routes (Protected) */}
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/problems" element={<ProblemList />} />
              <Route path="/problems/:id" element={<ProblemDetail />} />
              <Route path="/editor" element={<CodeEditor />} />
              <Route path="/visualizer" element={<Visualizer />} />
              <Route path="/learn" element={<TopicLearning />} />
              <Route path="/learn/:id" element={<TopicDetail />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/contest" element={<Contest />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/notifications" element={<NotificationCenter />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/ai-assistant" element={<AIAssistant />} />
              </Route>
            </Route>

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
}

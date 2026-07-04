import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { CURRENT_USER } from '../../lib/mockData';

export default function ProtectedRoute() {
  const location = useLocation();
  // Using our mock user for now. In a real app, this would come from an AuthContext.
  const isAuthenticated = !!CURRENT_USER;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

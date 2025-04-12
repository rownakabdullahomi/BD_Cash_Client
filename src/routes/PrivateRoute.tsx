


import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../providers/AuthProvider';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) return <p>Loading....</p>;
  if (user) return children;
  
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

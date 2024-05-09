import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  element: ReactElement;
};

const ProtectedRoute = ({ element }: Props) => {
  const isAuthenticated = true;
  return isAuthenticated ? element : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;

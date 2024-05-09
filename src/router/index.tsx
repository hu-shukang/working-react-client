import Dashboard from '@/pages/dashboard';
import Page2 from '@/pages/page2';
import { RouteObject, useRoutes } from 'react-router';
import ProtectedRoute from './protected-route';

const routes: RouteObject[] = [
  {
    path: '',
    element: <Dashboard />
  },
  {
    path: '2',
    element: <ProtectedRoute element={<Page2 />} />
  }
];

const Router = () => {
  const router = useRoutes(routes);
  return router;
};

export default Router;

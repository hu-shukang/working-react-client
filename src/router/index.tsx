import Dashboard from '@/pages/dashboard';
import { Navigate, RouteObject, useRoutes } from 'react-router';
import HomePage from '@/pages/dashboard/home';

const routes: RouteObject[] = [
  {
    path: '',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <Navigate to="/home" replace={true} />
      },
      {
        path: 'home',
        element: <HomePage />
      }
    ]
  }
  // {
  //   path: '2',
  //   element: <ProtectedRoute element={<Page2 />} />
  // }
];

const Router = () => {
  const router = useRoutes(routes);
  return router;
};

export default Router;

import Dashboard from '@/pages/dashboard';
import { Navigate, RouteObject, useRoutes } from 'react-router';
import HomePage from '@/pages/dashboard/home';
import OrdersPage from '@/pages/dashboard/orders';
import NotFound from '@/pages/not-found';

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
      },
      {
        path: 'orders',
        element: <OrdersPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
];

const Router = () => {
  const router = useRoutes(routes);
  return router;
};

export default Router;

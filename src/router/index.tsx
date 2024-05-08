import Page1 from '@/pages/page1';
import Page2 from '@/pages/page2';
import { RouteObject, useRoutes } from 'react-router';

const routes: RouteObject[] = [
  {
    path: '',
    element: <Page1 />
  },
  {
    path: '2',
    element: <Page2 />
  }
];

const Router = () => {
  const router = useRoutes(routes);
  return router;
};

export default Router;

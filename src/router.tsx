import { Navigate, createBrowserRouter } from 'react-router-dom';

const routerElement = [
  {
    path: '/',
    element: <Navigate to={'/'} replace />,
  },
  {
    path: '/xr-page',
    element: <Navigate to={'/xr-page'} replace />,
  },
];

export const router = createBrowserRouter(routerElement);

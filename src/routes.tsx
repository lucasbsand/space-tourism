import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/defaultLayout';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/destination',
        element: <Destination />,
      },
      {
        path: '/crew',
        element: <Crew />,
      },
      {
        path: '/technology',
        element: <Technology />,
      },
    ],
  },
]);

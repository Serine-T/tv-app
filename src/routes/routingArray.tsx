import { RouteObject } from 'react-router-dom';
import NotFound from '@containers/NotFound';

import PAGE_ROUTES from './routingEnum';
import { lazy } from 'react';
const Home = lazy(() => import('@containers/Home'));

export const routingArray: RouteObject[] = [
  { path: PAGE_ROUTES.NOT_FOUND, element: <NotFound /> },
  { path: PAGE_ROUTES.HOME, element: <Home /> },
];

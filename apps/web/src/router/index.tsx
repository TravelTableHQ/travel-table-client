import { useRoutes } from 'react-router-dom';

import AuthLayout from '@/layout/AuthLayout';
import DefaultLayout from '@/layout/DefaultLayout';

import { ROUTES } from '@/constants/ROUTES';
import generatedRoutes from '~react-pages';

const authRoutes = [ROUTES.LOGIN];

export function AppRoutes() {
  const routes = generatedRoutes.map((route) => {
    const isAuthRoute = authRoutes.includes('/' + (route.path ?? ''));
    const LayoutComponent = isAuthRoute ? AuthLayout : DefaultLayout;

    return {
      ...route,
      element: <LayoutComponent>{route.element}</LayoutComponent>,
    };
  });

  return useRoutes(routes);
}

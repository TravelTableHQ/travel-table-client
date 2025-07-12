import { useRoutes } from 'react-router-dom';

import DefaultLayout from '@/layout/DefaultLayout';
import generatedRoutes from '~react-pages';

export function AppRoutes() {
  const routes = generatedRoutes.map((route) => {
    const LayoutComponent = DefaultLayout;

    return {
      ...route,
      element: (
        <>
          <LayoutComponent>{route.element}</LayoutComponent>
        </>
      ),
    };
  });

  return useRoutes(routes);
}

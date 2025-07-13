import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import { store } from '@/store';

import i18n, { initI18n } from '../lib/i18n';

interface AppProvidersProps {
  children: ReactNode;
}

export const initializeLibraries = async () => {
  await initI18n();

  return {
    i18n,
  };
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
};

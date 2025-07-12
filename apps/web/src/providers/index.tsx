import { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import { store } from '@/store';

interface AppProvidersProps {
  children: ReactNode;
  libraryInstances: {
    i18nInstance: typeof i18n;
    queryClientInstance: QueryClient;
  };
}

export const AppProviders = ({ children, libraryInstances }: AppProvidersProps) => {
  const { i18nInstance, queryClientInstance } = libraryInstances;

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClientInstance}>
          <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
};

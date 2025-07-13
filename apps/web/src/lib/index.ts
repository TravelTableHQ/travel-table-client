import i18n, { initI18n } from './i18n';

export const initializeLibraries = async () => {
  await initI18n();

  return {
    i18n,
  };
};

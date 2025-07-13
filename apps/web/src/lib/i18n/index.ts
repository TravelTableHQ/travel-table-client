import dayjs from 'dayjs';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { z } from 'zod';
import { zodI18nMap } from 'zod-i18n-map';

// 필요한 dayjs 로케일들 import
import 'dayjs/locale/en';
import 'dayjs/locale/ko';

const dayjsLocaleMap = {
  ko: 'ko',
  en: 'en',
} as const;

// @/i18n/locales 하위의 모든 번역 파일 자동 로드
const modules = import.meta.glob('./locales/*.ts', {
  eager: true,
  import: '*',
});

const resources: Record<string, { translation: any }> = Object.entries(modules).reduce(
  (acc, [fileName, content]) => {
    const match = fileName.match(/^.*\/(.*).ts$/);
    if (match && typeof content === 'object' && content !== null && 'default' in content) {
      acc[match[1]] = { translation: content.default };
    }
    return acc;
  },
  {} as Record<string, { translation: any }>,
);

// 지원하는 언어 목록 생성
const availableLocales = Object.keys(resources);

// Zod 에러 메시지 다국어화 (선택사항)
z.setErrorMap(zodI18nMap);

export const initI18n = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: resources,
      lng: 'ko',
      fallbackLng: 'ko',
      debug: import.meta.env.MODE === 'development',
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator'],
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',
        caches: [],
      },
    });

  // 언어 변경 시 dayjs 로케일도 함께 변경
  i18n.on('languageChanged', (lng) => {
    const dayjsLocale = dayjsLocaleMap[lng as keyof typeof dayjsLocaleMap] || 'ko';
    dayjs.locale(dayjsLocale);
  });

  // 초기 dayjs 로케일 설정
  const currentLng = i18n.language || 'ko';
  const dayjsLocale = dayjsLocaleMap[currentLng as keyof typeof dayjsLocaleMap] || 'ko';
  dayjs.locale(dayjsLocale);
};

// 타입 정의
type TOptions = Record<string, string | number>;

// t 함수 export
export const t = (key: string, options?: TOptions): string => {
  return i18n.t(key, options);
};

export { availableLocales };
export default i18n;

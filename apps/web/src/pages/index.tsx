// src/pages/index.tsx
import { useTranslation } from 'react-i18next';
import { Button, cn } from '@tth/ui';
import { availableLocales } from '@/lib/i18n';

function HomePage() {
  const { t, i18n: i18nInstance } = useTranslation();
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <div className='text-center'>
        <div className='mb-4 flex justify-center gap-2'>
          {availableLocales.map((lng) => (
            <Button
              key={lng}
              variant={i18nInstance.language === lng ? 'default' : 'secondary'}
              onClick={() => i18nInstance.changeLanguage(lng)}
            >
              {lng.toUpperCase()}
            </Button>
          ))}
        </div>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>{t('auth.label.project')}</h1>
        <div className='space-x-4'>
          <Button variant='default' onClick={() => alert('Primary clicked!')}>
            Primary Button
          </Button>
          <Button
            variant='secondary'
            className={cn('shadow-lg', 'border-2')}
            onClick={() => alert('Secondary clicked!')}
          >
            Secondary Button
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

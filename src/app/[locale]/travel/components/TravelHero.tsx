"use client";
import { useTranslations } from 'next-intl';

export default function TravelHero() {
  const t = useTranslations('travelPage');
  return (
    <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-transylvanian-stone mb-3 sm:mb-4 leading-tight">
        <span className="block sm:inline">{t('titlePrefix')}</span>{' '}
        <span className="font-semibold text-tricolor-blue block sm:inline">{t('titleHighlight')}</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-transylvanian-stone/70 leading-relaxed">
        {t('description')}
      </p>
    </div>
  );
}

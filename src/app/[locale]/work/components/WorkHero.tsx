"use client";
import { useTranslations } from 'next-intl';

export default function WorkHero() {
  const t = useTranslations('workPage');

  return (
    <div className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-transylvanian-stone mb-4 sm:mb-6 leading-tight">
        <span className="text-transylvanian-stone">{t('title')}</span>{' '}
        <span className="text-carpathian-forest font-medium">{t('subtitle')}</span>
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-transylvanian-stone/70 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
        {t('description')}
      </p>
    </div>
  );
}

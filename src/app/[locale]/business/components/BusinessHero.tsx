"use client";
import { useTranslations } from 'next-intl';

export default function BusinessHero() {
  const t = useTranslations('businessPage');

  return (
    <div className="text-center mb-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-light text-transylvanian-stone mb-6">
        <span className="text-transylvanian-stone">{t('title')}</span>{' '}
        <span className="text-tricolor-blue font-medium">{t('subtitle')}</span>
      </h1>
      <p className="text-xl text-transylvanian-stone/70 leading-relaxed mb-8 max-w-3xl mx-auto">
        {t('description')}
      </p>
    </div>
  );
}

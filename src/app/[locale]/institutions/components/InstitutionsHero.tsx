"use client";
import { useTranslations } from 'next-intl';

export default function InstitutionsHero() {
  const t = useTranslations('institutionsPage');

  return (
    <div className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto px-2 sm:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-transylvanian-stone mb-4 sm:mb-6 leading-tight">
        <span className="text-transylvanian-stone">{t('titlePrefix')}</span>{' '}
        <span className="text-tricolor-blue font-medium">{t('titleHighlight')}</span>
      </h1>
      <p className="text-sm sm:text-lg lg:text-xl text-transylvanian-stone/70 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
        {t('description')}
      </p>
    </div>
  );
}

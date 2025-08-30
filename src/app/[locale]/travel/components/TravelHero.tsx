"use client";
import { useTranslations } from 'next-intl';

export default function TravelHero() {
  const t = useTranslations('travelPage');
  return (
    <div className="text-center mb-12 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-light text-transylvanian-stone mb-4">
        {t('titlePrefix')} <span className="font-semibold">{t('titleHighlight')}</span>
      </h1>
      <p className="text-xl text-transylvanian-stone/70 leading-relaxed">
        {t('description')}
      </p>
    </div>
  );
}

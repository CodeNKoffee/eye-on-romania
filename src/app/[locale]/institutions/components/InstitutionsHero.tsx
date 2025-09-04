"use client";
import { useTranslations } from 'next-intl';

export default function InstitutionsHero() {
  const t = useTranslations('institutionsPage');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-transylvanian-stone mb-6">
          {t('titlePrefix')}{' '}
          <span className="text-tricolor-blue">{t('titleHighlight')}</span>
        </h1>
        <p className="text-xl text-transylvanian-stone/80 leading-relaxed mb-8">
          {t('description')}
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="text-center p-4 bg-tricolor-blue/5 rounded-lg">
            <div className="text-2xl font-bold text-tricolor-blue mb-2">{t('stats.coverage')}</div>
            <div className="text-sm text-transylvanian-stone/70">{t('stats.coverageLabel')}</div>
          </div>
          <div className="text-center p-4 bg-carpathian-forest/5 rounded-lg">
            <div className="text-2xl font-bold text-carpathian-forest mb-2">{t('stats.sources')}</div>
            <div className="text-sm text-transylvanian-stone/70">{t('stats.sourcesLabel')}</div>
          </div>
          <div className="text-center p-4 bg-tricolor-red/5 rounded-lg">
            <div className="text-2xl font-bold text-tricolor-red mb-2">{t('stats.languages')}</div>
            <div className="text-sm text-transylvanian-stone/70">{t('stats.languagesLabel')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

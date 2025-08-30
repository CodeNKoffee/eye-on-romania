"use client";
import { useTranslations } from 'next-intl';

export default function Transportation() {
  const t = useTranslations('travelPage');
  return (
    <div className="mt-8 bg-white rounded-xl shadow-sm border border-danube-mist p-8">
      <h3 className="text-xl font-semibold text-transylvanian-stone mb-6 flex items-center">
        <svg className="w-6 h-6 mr-3 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        {t('transport.title')}
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 border border-danube-mist rounded-lg">
          <h4 className="font-semibold text-transylvanian-stone mb-2">{t('transport.byTrain.title')}</h4>
          <p className="text-sm text-transylvanian-stone/70">{t('transport.byTrain.desc')}</p>
        </div>

        <div className="p-4 border border-danube-mist rounded-lg">
          <h4 className="font-semibold text-transylvanian-stone mb-2">{t('transport.byBus.title')}</h4>
          <p className="text-sm text-transylvanian-stone/70">{t('transport.byBus.desc')}</p>
        </div>

        <div className="p-4 border border-danube-mist rounded-lg">
          <h4 className="font-semibold text-transylvanian-stone mb-2">{t('transport.byCar.title')}</h4>
          <p className="text-sm text-transylvanian-stone/70">{t('transport.byCar.desc')}</p>
        </div>
      </div>
    </div>
  );
}

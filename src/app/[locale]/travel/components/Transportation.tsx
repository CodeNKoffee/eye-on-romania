"use client";
import { useTranslations } from 'next-intl';

export default function Transportation() {
  const t = useTranslations('travelPage');
  return (
    <div className="mt-6 sm:mt-8 bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8">
      <h3 className="text-lg sm:text-xl font-semibold text-transylvanian-stone mb-4 sm:mb-6 flex items-center">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-tricolor-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <span>{t('transport.title')}</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-3 sm:p-4 border border-danube-mist rounded-lg hover:shadow-sm transition-shadow touch-manipulation">
          <h4 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base">{t('transport.byTrain.title')}</h4>
          <p className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('transport.byTrain.desc')}</p>
        </div>

        <div className="p-3 sm:p-4 border border-danube-mist rounded-lg hover:shadow-sm transition-shadow touch-manipulation">
          <h4 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base">{t('transport.byBus.title')}</h4>
          <p className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('transport.byBus.desc')}</p>
        </div>

        <div className="p-3 sm:p-4 border border-danube-mist rounded-lg hover:shadow-sm transition-shadow touch-manipulation">
          <h4 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base">{t('transport.byCar.title')}</h4>
          <p className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('transport.byCar.desc')}</p>
        </div>
      </div>
    </div>
  );
}

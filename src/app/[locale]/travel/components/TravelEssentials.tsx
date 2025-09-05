"use client";
import { useTranslations } from 'next-intl';

export default function TravelEssentials() {
  const t = useTranslations('travelPage');
  return (
    <div className="mt-12 sm:mt-16 bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-transylvanian-stone mb-6 sm:mb-8 text-center">{t('essentials.title')}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="text-center p-4 sm:p-6 rounded-lg bg-danube-mist/30 border border-danube-mist touch-manipulation">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-tricolor-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base">{t('essentials.languageTitle')}</h3>
          <p className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('essentials.languageDesc')}</p>
        </div>

        <div className="text-center p-4 sm:p-6 rounded-lg bg-danube-mist/30 border border-danube-mist touch-manipulation">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-carpathian-forest/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-carpathian-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base">{t('essentials.currencyTitle')}</h3>
          <p className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('essentials.currencyDesc')}</p>
        </div>

        <div className="text-center p-4 sm:p-6 rounded-lg bg-danube-mist/30 border border-danube-mist touch-manipulation">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-tricolor-red/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-tricolor-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base">{t('essentials.safetyTitle')}</h3>
          <p className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('essentials.safetyDesc')}</p>
        </div>

        <div className="text-center p-4 sm:p-6 rounded-lg bg-danube-mist/30 border border-danube-mist touch-manipulation">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-tricolor-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-tricolor-yellow stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
          <h3 className="font-semibold text-transylvanian-stone mb-2 text-sm sm:text-base">{t('essentials.connectivityTitle')}</h3>
          <p className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('essentials.connectivityDesc')}</p>
        </div>
      </div>
    </div>
  );
}

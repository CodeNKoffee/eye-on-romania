"use client";
import { useTranslations } from 'next-intl';
import Ribbon from '@/components/Ribbon';

export default function PrivacyPage() {
  const t = useTranslations('legal');

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transylvanian-stone mb-6 sm:mb-8 leading-tight">
            {t('privacy.title')}
          </h1>
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-transylvanian-stone mb-3 sm:mb-4 leading-tight">
                {t('privacy.overview.title')}
              </h2>
              <p className="text-sm sm:text-base text-transylvanian-stone/80 leading-relaxed mb-3 sm:mb-4">
                {t('privacy.overview.description')}
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-transylvanian-stone mb-3 sm:mb-4 leading-tight">
                {t('privacy.dataCollection.title')}
              </h2>
              <p className="text-sm sm:text-base text-transylvanian-stone/80 leading-relaxed mb-3 sm:mb-4">
                {t('privacy.dataCollection.description')}
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-transylvanian-stone mb-3 sm:mb-4 leading-tight">
                {t('privacy.cookies.title')}
              </h2>
              <p className="text-sm sm:text-base text-transylvanian-stone/80 leading-relaxed mb-3 sm:mb-4">
                {t('privacy.cookies.description')}
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-transylvanian-stone mb-3 sm:mb-4 leading-tight">
                {t('privacy.dataProcessing.title')}
              </h2>
              <p className="text-sm sm:text-base text-transylvanian-stone/80 leading-relaxed mb-3 sm:mb-4">
                {t('privacy.dataProcessing.description')}
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-transylvanian-stone mb-3 sm:mb-4 leading-tight">
                {t('privacy.thirdParty.title')}
              </h2>
              <p className="text-sm sm:text-base text-transylvanian-stone/80 leading-relaxed mb-3 sm:mb-4">
                {t('privacy.thirdParty.description')}
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-transylvanian-stone mb-3 sm:mb-4 leading-tight">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-sm sm:text-base text-transylvanian-stone/80 leading-relaxed">
                {t('privacy.contact.description')}
              </p>
            </section>

            <div className="text-xs sm:text-sm text-transylvanian-stone/60 mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-danube-mist">
              {t('privacy.lastUpdated')}: September 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

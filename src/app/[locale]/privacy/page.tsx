"use client";
import { useTranslations } from 'next-intl';
import Ribbon from '@/components/Ribbon';

export default function PrivacyPage() {
  const t = useTranslations('legal');

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-danube-mist p-8">
          <h1 className="text-3xl font-bold text-transylvanian-stone mb-8">
            {t('privacy.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-transylvanian-stone mb-4">
                {t('privacy.overview.title')}
              </h2>
              <p className="text-transylvanian-stone/80 leading-relaxed mb-4">
                {t('privacy.overview.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-transylvanian-stone mb-4">
                {t('privacy.dataCollection.title')}
              </h2>
              <p className="text-transylvanian-stone/80 leading-relaxed mb-4">
                {t('privacy.dataCollection.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-transylvanian-stone mb-4">
                {t('privacy.cookies.title')}
              </h2>
              <p className="text-transylvanian-stone/80 leading-relaxed mb-4">
                {t('privacy.cookies.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-transylvanian-stone mb-4">
                {t('privacy.thirdParty.title')}
              </h2>
              <p className="text-transylvanian-stone/80 leading-relaxed mb-4">
                {t('privacy.thirdParty.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-transylvanian-stone mb-4">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-transylvanian-stone/80 leading-relaxed">
                {t('privacy.contact.description')}
              </p>
            </section>

            <div className="text-sm text-transylvanian-stone/60 mt-8 pt-4 border-t border-danube-mist">
              {t('privacy.lastUpdated')}: September 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

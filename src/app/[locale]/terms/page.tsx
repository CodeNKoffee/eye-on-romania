"use client";
import { useTranslations } from 'next-intl';
import Ribbon from '@/components/Ribbon';

export default function TermsPage() {
  const t = useTranslations('legal');

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-danube-mist p-8">
          <h1 className="text-3xl font-bold text-transylvanian-stone mb-8">
            {t('terms.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-transylvanian-stone mb-4">
                {t('terms.acceptance.title')}
              </h2>
              <p className="text-transylvanian-stone/80 leading-relaxed mb-4">
                {t('terms.acceptance.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-transylvanian-stone mb-4">
                {t('terms.purpose.title')}
              </h2>
              <p className="text-transylvanian-stone/80 leading-relaxed mb-4">
                {t('terms.purpose.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-transylvanian-stone mb-4">
                {t('terms.disclaimer.title')}
              </h2>
              <p className="text-transylvanian-stone/80 leading-relaxed mb-4">
                {t('terms.disclaimer.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-transylvanian-stone mb-4">
                {t('terms.intellectual.title')}
              </h2>
              <p className="text-transylvanian-stone/80 leading-relaxed mb-4">
                {t('terms.intellectual.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-transylvanian-stone mb-4">
                {t('terms.changes.title')}
              </h2>
              <p className="text-transylvanian-stone/80 leading-relaxed mb-4">
                {t('terms.changes.description')}
              </p>
            </section>

            <div className="text-sm text-transylvanian-stone/60 mt-8 pt-4 border-t border-danube-mist">
              {t('terms.lastUpdated')}: September 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

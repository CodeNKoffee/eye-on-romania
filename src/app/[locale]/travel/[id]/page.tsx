"use client";
import itineraries from '@/data/itineraries.json';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Ribbon from '@/components/Ribbon';

type PropsLike = { params?: { id: string } };

export default function ItineraryPage(props: unknown) {
  const t = useTranslations('travelPage');
  const params = (props as PropsLike).params as { id: string };
  const itinerary = itineraries.itineraries.find((x) => x.id === params.id);

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist flex items-center justify-center">
        <Ribbon />
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-transylvanian-stone mb-4">{t('notFound.title')}</h1>
          <Link href="/travel" className="text-tricolor-blue hover:underline">← {t('notFound.back')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />
      <div className="container mx-auto px-6 py-12">
        <nav className="mb-8 max-w-4xl mx-auto">
          <div className="flex items-center text-sm text-transylvanian-stone/60">
            <Link href="/travel" className="hover:text-tricolor-blue transition-colors">{t('breadcrumb.root')}</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-transylvanian-stone">{itinerary.title}</span>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-danube-mist overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-tricolor-blue/10 via-tricolor-yellow/10 to-tricolor-red/10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-light text-transylvanian-stone mb-4">{itinerary.title}</h1>
                  <p className="text-lg text-transylvanian-stone/70 leading-relaxed mb-6">{itinerary.summary}</p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="inline-flex items-center px-4 py-2 bg-carpathian-forest/10 text-carpathian-forest text-sm font-medium rounded-lg border border-carpathian-forest/20">
                      {itinerary.days} {t('days')}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-80 h-48 bg-white/50 rounded-lg border border-danube-mist flex items-center justify-center">
                  <div className="text-center">{t('mapPlaceholder')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
            <h2 className="text-2xl font-semibold text-transylvanian-stone mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              {t('details.title')}
            </h2>

            <div className="space-y-6">
              {itinerary.stops.map((stop: string, index: number) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-danube-mist/20 rounded-full flex items-center justify-center text-transylvanian-stone">{index + 1}</div>
                    {index < itinerary.stops.length - 1 && <div className="w-px bg-danube-mist h-full mt-2" />}
                  </div>

                  <div className="flex-1 pb-6">
                    <h4 className="font-medium text-transylvanian-stone mb-1">{stop}</h4>
                    <p className="text-sm text-transylvanian-stone/70">{t('stopPlaceholder')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-6">
              <h3 className="text-lg font-semibold text-transylvanian-stone mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-carpathian-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                {t('practical.gettingThere')}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">{t('practical.byTrain.label')}</span>
                  <span className="text-transylvanian-stone font-medium">{t('practical.byTrain.example')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">{t('practical.byCar.label')}</span>
                  <span className="text-transylvanian-stone font-medium">{t('practical.byCar.example')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">{t('practical.byBus.label')}</span>
                  <span className="text-transylvanian-stone font-medium">{t('practical.byBus.example')}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-6">
              <h3 className="text-lg font-semibold text-transylvanian-stone mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-tricolor-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {t('practical.whereToStay')}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">{t('accommodation.budget.label')}</span>
                  <span className="text-transylvanian-stone font-medium">{t('accommodation.budget.example')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">{t('accommodation.mid.label')}</span>
                  <span className="text-transylvanian-stone font-medium">{t('accommodation.mid.example')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-transylvanian-stone/70">{t('accommodation.lux.label')}</span>
                  <span className="text-transylvanian-stone font-medium">{t('accommodation.lux.example')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8">
            <h3 className="text-lg font-semibold text-transylvanian-stone mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-tricolor-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {t('tips.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-danube-mist/30 rounded-lg">
                <h4 className="font-medium text-transylvanian-stone mb-2">{t('tips.bestTimeTitle')}</h4>
                <p className="text-transylvanian-stone/70">{t('tips.bestTimeDesc')}</p>
              </div>
              <div className="p-4 bg-danube-mist/30 rounded-lg">
                <h4 className="font-medium text-transylvanian-stone mb-2">{t('tips.packTitle')}</h4>
                <p className="text-transylvanian-stone/70">{t('tips.packDesc')}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/travel" className="inline-flex items-center px-6 py-3 text-tricolor-blue hover:text-tricolor-blue/80 font-medium transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t('backToAll')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ItineraryCard({ itinerary }: { itinerary: any }) {
  const t = useTranslations('travelPage');
  return (
    <article className="bg-white rounded-xl shadow-sm border border-danube-mist overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="md:flex">
        <div className="md:w-80 h-64 md:h-auto bg-gradient-to-br from-tricolor-blue/20 via-tricolor-yellow/20 to-tricolor-red/20 flex items-center justify-center">
          <div className="text-center p-6">
            <svg className="w-16 h-16 text-tricolor-blue/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-sm font-medium text-transylvanian-stone/60">{itinerary.title}</div>
          </div>
        </div>

        <div className="flex-1 p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-semibold text-transylvanian-stone group-hover:text-tricolor-blue transition-colors">{itinerary.title}</h3>
            <div className="flex items-center gap-4 text-sm text-transylvanian-stone/60">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {itinerary.days} days
              </div>
            </div>
          </div>

          <p className="text-transylvanian-stone/70 leading-relaxed mb-6 text-lg">{itinerary.summary}</p>

          <div className="mb-6">
            <h4 className="font-medium text-transylvanian-stone mb-3">{t('highlightsTitle')}</h4>
            <div className="flex flex-wrap gap-2">
              {itinerary.stops.slice(0, 3).map((stop: string, stopIndex: number) => (
                <span key={stopIndex} className="px-3 py-1 bg-danube-mist/50 text-transylvanian-stone/80 rounded-full text-sm border border-danube-mist">{stop}</span>
              ))}
              {itinerary.stops.length > 3 && (
                <span className="px-3 py-1 bg-tricolor-blue/10 text-tricolor-blue rounded-full text-sm border border-tricolor-blue/20">+{itinerary.stops.length - 3} more</span>
              )}
            </div>
          </div>

          <Link href={`/travel/${itinerary.id}`} className="inline-flex items-center text-tricolor-blue hover:text-tricolor-blue/80 font-medium group-hover:underline transition-all">
            {t('viewItinerary')}
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

"use client";
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ItineraryCard({ itinerary }: { itinerary: any }) {
  const t = useTranslations('travelPage');
  return (
    <article className="bg-white rounded-xl shadow-sm border border-danube-mist overflow-hidden hover:shadow-lg transition-all duration-300 group touch-manipulation">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-80 h-48 sm:h-64 lg:h-auto bg-gradient-to-br from-tricolor-blue/20 via-tricolor-yellow/20 to-tricolor-red/20 flex items-center justify-center">
          <div className="text-center p-4 sm:p-6">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-tricolor-blue/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-xs sm:text-sm font-medium text-transylvanian-stone/60">{itinerary.title}</div>
          </div>
        </div>

        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2 sm:gap-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-transylvanian-stone group-hover:text-tricolor-blue transition-colors leading-tight">{itinerary.title}</h3>
            <div className="flex items-center gap-1 text-xs sm:text-sm text-transylvanian-stone/60 self-start sm:self-auto">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="whitespace-nowrap">{itinerary.days} days</span>
            </div>
          </div>

          <p className="text-transylvanian-stone/70 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">{itinerary.summary}</p>

          <div className="mb-4 sm:mb-6">
            <h4 className="font-medium text-transylvanian-stone mb-2 sm:mb-3 text-sm sm:text-base">{t('highlightsTitle')}</h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {itinerary.stops.slice(0, 3).map((stop: string, stopIndex: number) => (
                <span key={stopIndex} className="px-2 sm:px-3 py-1 bg-danube-mist/50 text-transylvanian-stone/80 rounded-full text-xs sm:text-sm border border-danube-mist leading-tight">{stop}</span>
              ))}
              {itinerary.stops.length > 3 && (
                <span className="px-2 sm:px-3 py-1 bg-tricolor-blue/10 text-tricolor-blue rounded-full text-xs sm:text-sm border border-tricolor-blue/20 leading-tight">+{itinerary.stops.length - 3} more</span>
              )}
            </div>
          </div>

          <Link href={`/travel/${itinerary.id}`} className="inline-flex items-center text-tricolor-blue hover:text-tricolor-blue/80 active:text-tricolor-blue/90 font-medium group-hover:underline transition-all text-sm sm:text-base touch-manipulation">
            <span>{t('viewItinerary')}</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 flex-shrink-0 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

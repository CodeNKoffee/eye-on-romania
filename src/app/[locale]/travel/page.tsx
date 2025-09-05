"use client";
import itineraries from '@/data/itineraries.json';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import TravelHero from '@/app/[locale]/travel/components/TravelHero';
import ItineraryList from '@/app/[locale]/travel/components/ItineraryList';
import TravelEssentials from '@/app/[locale]/travel/components/TravelEssentials';
import Transportation from '@/app/[locale]/travel/components/Transportation';
import Ribbon from '@/components/Ribbon';

export default function TravelPage() {
  const t = useTranslations('travelPage');

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <TravelHero />

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-tricolor-blue mb-1 sm:mb-2">15+</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('stats.unesco')}</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-carpathian-forest mb-1 sm:mb-2">7</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('stats.nationalParks')}</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-tricolor-red mb-1 sm:mb-2">150+</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('stats.castles')}</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-tricolor-yellow mb-1 sm:mb-2">3,700km</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{t('stats.carpathianRange')}</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-transylvanian-stone mb-6 sm:mb-8 text-center">
            {t('featuredTitle')}
          </h2>

          <ItineraryList itineraries={itineraries.itineraries} />

          <TravelEssentials />

          <Transportation />
        </div>
      </div>
    </div>
  );
}
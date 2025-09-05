"use client";
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import universities from '@/data/universities.json';
import Ribbon from '@/components/Ribbon';
import StudyHero from '@/app/[locale]/study/components/StudyHero';
import UniversityFilter from '@/app/[locale]/study/components/UniversityFilter';
import UniversityList from '@/app/[locale]/study/components/UniversityList';
import StudyEssentials from '@/app/[locale]/study/components/StudyEssentials';
import StudyPathways from '@/app/[locale]/study/components/StudyPathways';

export default function StudyPage() {
  const t = useTranslations('studyPage');
  const [selectedDegree, setSelectedDegree] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <Ribbon />
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <StudyHero />

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-tricolor-blue mb-1 sm:mb-2">95+</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">Universities</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-carpathian-forest mb-1 sm:mb-2">EU</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">Recognition</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-tricolor-red mb-1 sm:mb-2">€1,800+</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">Tuition from</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-danube-mist hover:bg-white/70 transition-colors touch-manipulation">
            <div className="text-xl sm:text-2xl font-bold text-tricolor-yellow mb-1 sm:mb-2">50+</div>
            <div className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">Fields of Study</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <StudyPathways />

          <UniversityFilter 
            selectedDegree={selectedDegree}
            onDegreeChange={setSelectedDegree}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
          />

          <UniversityList 
            universities={universities.universities}
            selectedDegree={selectedDegree}
            selectedCity={selectedCity}
          />

          <StudyEssentials />
        </div>
      </div>
    </div>
  );
}

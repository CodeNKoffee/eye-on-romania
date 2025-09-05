"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import CheckListItem from "../ui/CheckListItem";
import { useVisaData } from "../../hooks/useVisaData";

type VisaType = 'shortStay' | 'longStay' | 'transit';

export default function VisaChecklist() {
  const t = useTranslations("visaPage");
  const { requirements, isVisaFree, countryData } = useVisaData();
  const [activeTab, setActiveTab] = useState<VisaType>('shortStay');

  // Define requirements for different visa types
  const visaTypeRequirements = {
    shortStay: [
      'requirements.passport',
      'requirements.application',
      'requirements.photos',
      'requirements.flight',
      'requirements.insurance',
      'requirements.accommodation',
      'requirements.financial',
      'requirements.purpose',
      'requirements.invitation',
      'requirements.certificate',
      'requirements.program',
      'requirements.achievements',
      'requirements.employment'
    ],
    longStay: [
      'requirements.passport',
      'requirements.application',
      'requirements.photos',
      'requirements.insurance',
      'requirements.accommodation',
      'requirements.financial',
      'requirements.employment',
      'requirements.police',
      'requirements.appointment',
      'requirements.biometric'
    ],
    transit: [
      'requirements.passport',
      'requirements.application',
      'requirements.photos',
      'requirements.flight',
      'requirements.financial'
    ]
  };

  // Tab configuration
  const tabs = [
    {
      id: 'shortStay' as VisaType,
      label: t('visaTypes.shortStay.type'),
      duration: t('visaTypes.shortStay.duration'),
      color: 'tricolor-blue'
    },
    {
      id: 'longStay' as VisaType,
      label: t('visaTypes.longStay.type'),
      duration: t('visaTypes.longStay.duration'),
      color: 'tricolor-red'
    },
    {
      id: 'transit' as VisaType,
      label: t('visaTypes.transit.type'),
      duration: t('visaTypes.transit.duration'),
      color: 'carpathian-forest'
    }
  ];

  // Function to translate requirement keys
  const translateRequirement = (key: string): string => {
    // If it's already a translated string (not a key), return as-is
    if (!key.startsWith('requirements.')) {
      return key;
    }
    
    // Try to get translation for the key
    const translated = t(`requirements.${key.replace('requirements.', '')}`, { defaultValue: key });
    
    // If translation key doesn't exist, return a fallback
    if (translated === key) {
      // Map common keys to fallback English text
      const fallbacks: Record<string, string> = {
        'requirements.passport': 'Passport (valid 6+ months beyond intended stay)',
        'requirements.application': 'Completed visa application form (signed and dated)',
        'requirements.photos': '2 recent passport photos (35x45mm, color, white background)',
        'requirements.flight': 'Roundtrip flight reservation or travel itinerary',
        'requirements.insurance': 'Travel insurance (minimum €30,000 coverage)',
        'requirements.accommodation': 'Proof of accommodation (hotel bookings, invitation letter)',
        'requirements.financial': 'Financial means evidence (bank statements, employment letter)',
        'requirements.purpose': 'Purpose of visit documentation',
        'requirements.invitation': 'Official invitation letter from Romanian cultural institution/event organizer',
        'requirements.certificate': 'Certificate of individual background/professional status',
        'requirements.program': 'Detailed program/schedule of cultural activities',
        'requirements.achievements': 'Proof of previous cultural/professional achievements (portfolio, CV)',
        'requirements.employment': 'Letter from employer (if employed) or university enrollment certificate (if student)',
        'requirements.appointment': 'Consular appointment required',
        'requirements.biometric': 'Biometric data collection required',
        'requirements.background': 'Additional background verification may apply',
        'requirements.appointmentMay': 'Consular appointment may be required',
        'requirements.police': 'Police clearance certificate (if stay > 90 days)',
        'requirements.biometricMay': 'Biometric data may be requested at application',
        'requirements.security': 'Additional security clearance may be required',
        'requirements.yellowFever': 'Yellow fever vaccination certificate required',
        'requirements.yellowFeverMay': 'Yellow fever vaccination certificate may be required'
      };
      return fallbacks[key] || key;
    }
    
    return translated;
  };

  if (isVisaFree) {
    return (
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-carpathian-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-carpathian-forest" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-transylvanian-stone mb-2">
                {t('noVisa.title')}
              </h3>
              <p className="text-transylvanian-stone/70 mb-4">
                {t('noVisa.description', { country: countryData?.name || t('download.countryOther') })}
              </p>
              <div className="text-sm text-transylvanian-stone/60">
                <p>{t('noVisa.needs.title', { defaultValue: "You'll still need:" })}</p>
                <ul className="mt-2 space-y-1">
                  <li>• {t('noVisa.needs.passport')}</li>
                  <li>• {t('noVisa.needs.funds')}</li>
                  <li>• {t('noVisa.needs.ticket')}</li>
                  <li>• {t('noVisa.needs.insurance')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Get current requirements based on active tab
  const getCurrentRequirements = () => {
    if (countryData?.code === 'EG' && activeTab === 'shortStay') {
      // Use existing Egyptian logic for short stay
      const rawEgypt: unknown = t('egypt.requirementsList', { returnObjects: true } as any);
      let translatedEgyptian: string[] | undefined;

      if (Array.isArray(rawEgypt)) {
        translatedEgyptian = rawEgypt as string[];
      } else if (typeof rawEgypt === 'string') {
        try {
          const parsed = JSON.parse(rawEgypt);
          if (Array.isArray(parsed)) translatedEgyptian = parsed as string[];
        } catch (e) {
          // not JSON, keep undefined
        }
      }

      let fallbackFromKeys: string[] = [];
      if (!translatedEgyptian) {
        fallbackFromKeys = [
          t('egypt.requirements.item1'),
          t('egypt.requirements.item2'),
          t('egypt.requirements.item3'),
          t('egypt.requirements.item4'),
          t('egypt.requirements.item5'),
          t('egypt.requirements.item6'),
          t('egypt.requirements.item7'),
          t('egypt.requirements.item8'),
          t('egypt.requirements.item9'),
          t('egypt.requirements.item10'),
          t('egypt.requirements.item11'),
          t('egypt.requirements.item12')
        ];
      }

      let egyptianRequirements: string[] = translatedEgyptian ?? fallbackFromKeys;
      const looksLikeUntranslatedKey = (str: string): boolean => {
        return str.startsWith('egypt.requirements.item') && !str.includes(' ');
      };

      const allKeysUntranslated = egyptianRequirements.length > 0 &&
        egyptianRequirements.every(item => looksLikeUntranslatedKey(item));

      if (allKeysUntranslated) {
        return visaTypeRequirements[activeTab].map(translateRequirement);
      } else {
        return egyptianRequirements;
      }
    }

    // For all other cases, use visa type specific requirements
    return visaTypeRequirements[activeTab].map(translateRequirement);
  };

  const currentRequirements = getCurrentRequirements();

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8">
          {/* Visa Type Tabs */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-tricolor-blue/10 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-transylvanian-stone">
                {t('checklist.title')}
              </h3>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                let tabClasses = `w-full sm:w-auto px-3 sm:px-4 py-3 sm:py-2 rounded-lg transition-all duration-200 flex flex-col items-center text-center border-2 touch-manipulation `;
                
                if (isActive) {
                  if (tab.color === 'tricolor-blue') {
                    tabClasses += 'bg-tricolor-blue/10 text-tricolor-blue border-tricolor-blue/30';
                  } else if (tab.color === 'tricolor-red') {
                    tabClasses += 'bg-tricolor-red/10 text-tricolor-red border-tricolor-red/30';
                  } else if (tab.color === 'carpathian-forest') {
                    tabClasses += 'bg-carpathian-forest/10 text-carpathian-forest border-carpathian-forest/30';
                  }
                } else {
                  tabClasses += 'bg-gray-50 text-transylvanian-stone/70 border-transparent hover:bg-gray-100 active:bg-gray-200';
                }

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={tabClasses}
                  >
                    <span className="font-medium text-sm sm:text-base">{tab.label}</span>
                    <span className="text-xs sm:text-sm opacity-75 mt-1">{tab.duration}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special notice for Egyptian citizens on short stay */}
          {countryData?.code === 'EG' && activeTab === 'shortStay' && (
            <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-amber-800 mb-1">{t('egypt.confirmedTitle')}</h4>
                  <p className="text-sm text-amber-700">
                    {t('egypt.confirmedDescription')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Requirements List */}
          <div className="grid md:grid-cols-1 gap-3">
            {currentRequirements.map((item, index) => (
              <CheckListItem key={index} text={item} />
            ))}
          </div>

          {/* Important notes for Egyptian citizens on short stay */}
          {countryData?.code === 'EG' && activeTab === 'shortStay' && (
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">{t('egypt.importantTitle')}</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• {t('egypt.importantList.li1')}</li>
                      <li>• {t('egypt.importantList.li2')}</li>
                      <li>• {t('egypt.importantList.li3')}</li>
                      <li>• {t('egypt.importantList.li4')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Consulate information */}
          {requirements.consulateUrl && (
            <div className="mt-6 p-4 bg-tricolor-blue/5 rounded-lg border border-tricolor-blue/20">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-tricolor-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <div>
                  <h4 className="font-semibold text-transylvanian-stone mb-1">{t('consulate.title')}</h4>
                  <p className="text-sm text-transylvanian-stone/70 mb-2">
                    {t('consulate.submitText')}
                  </p>
                  <a
                    href={requirements.consulateUrl || "https://cairo.mae.ro/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-tricolor-blue hover:underline text-sm"
                  >
                    {t('consulate.linkText')}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* General note */}
          <div className="mt-8 p-4 bg-danube-mist/50 rounded-lg border border-danube-mist">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-tricolor-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-transylvanian-stone mb-1">{t('checklist.note.title')}</h4>
                <p className="text-sm text-transylvanian-stone/70">
                  {t('checklist.note.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
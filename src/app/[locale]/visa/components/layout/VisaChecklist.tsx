"use client";
import { useTranslations } from "next-intl";
import CheckListItem from "../ui/CheckListItem";
import { useVisaData } from "../../hooks/useVisaData";

export default function VisaChecklist() {
  const t = useTranslations("visaPage");
  const { requirements, isVisaFree, countryData } = useVisaData();

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

  // Try to load Egyptian requirements from the requirementsList array first
  const rawEgypt: unknown = t('egypt.requirementsList', { returnObjects: true } as any);
  let translatedEgyptian: string[] | undefined;

  if (Array.isArray(rawEgypt)) {
    translatedEgyptian = rawEgypt as string[];
  } else if (typeof rawEgypt === 'string') {
    // Sometimes the serializer stores arrays as JSON strings - attempt to parse
    try {
      const parsed = JSON.parse(rawEgypt);
      if (Array.isArray(parsed)) translatedEgyptian = parsed as string[];
    } catch (e) {
      // not JSON, keep undefined
    }
  }

  // If requirementsList didn't work, try individual items
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

  // Better detection of untranslated keys - only fallback if we get literal translation keys back
  const looksLikeUntranslatedKey = (str: string): boolean => {
    // Must match exact pattern: "egypt.requirements.item1" etc. AND have no spaces
    return str.startsWith('egypt.requirements.item') && !str.includes(' ');
  };

  const allKeysUntranslated = egyptianRequirements.length > 0 &&
    egyptianRequirements.every(item => looksLikeUntranslatedKey(item));

  // Only use fallback if ALL items look like untranslated keys
  if (allKeysUntranslated) {
    console.log('All Egyptian requirements look untranslated, falling back to generic requirements');
    // Translate the generic requirements
    egyptianRequirements = requirements.items.map(translateRequirement);
  } else {
    console.log('Using translated Egyptian requirements:', egyptianRequirements.slice(0, 2));
  }

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

  // Use Egyptian requirements if the selected country is Egypt, otherwise translate generic requirements
  const currentRequirements = countryData?.code === 'EG' 
    ? egyptianRequirements 
    : requirements.items.map(translateRequirement);

  return (
    <section className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-tricolor-blue/10 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-transylvanian-stone">
              {t('checklist.title')}
            </h3>
          </div>

          {/* Special notice for Egyptian citizens */}
          {countryData?.code === 'EG' && (
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

          <div className="grid md:grid-cols-1 gap-3">
            {currentRequirements.map((item, index) => (
              <CheckListItem key={index} text={item} />
            ))}
          </div>

          {/* Important notes for Egyptian citizens */}
          {countryData?.code === 'EG' && (
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
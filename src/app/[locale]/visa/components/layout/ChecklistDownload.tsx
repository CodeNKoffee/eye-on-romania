"use client";
import { useTranslations } from "next-intl";
import { exportChecklistPDF } from "@/lib/pdf";
import LastUpdated from '@/components/LastUpdated';
import CountrySelector from "../ui/CountrySelector";
import { useVisaData } from "../../hooks/useVisaData";

export default function ChecklistDownload() {
  const t = useTranslations("visaPage");
  const { selectedCountry, setSelectedCountry, requirements, isVisaFree, countryData } = useVisaData();

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

  // Determine which requirements to use
  const getRequirementsForDownload = () => {
    if (isVisaFree) {
      return [
        "Valid passport (6+ months remaining validity)",
        "Proof of sufficient funds", 
        "Return/onward travel ticket",
        "Travel insurance (recommended)"
      ];
    }
    
    // For Egyptian citizens, use the translated Egyptian requirements if available
    if (countryData?.code === 'EG') {
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
        // Fall back to translating the generic requirements
        return requirements.items.map(translateRequirement);
      } else {
        return egyptianRequirements;
      }
    }
    
    // For all other countries, translate the requirement keys
    return requirements.items.map(translateRequirement);
  };

  const items = getRequirementsForDownload();

  // Localized strings for PDF header and labels
  const pdfStrings = {
    header: t('pdf.header'),
    subTitle: t('pdf.subTitle'),
    visaFreeBadge: t('pdf.visaFreeBadge'),
    visaRequiredBadge: t('pdf.visaRequiredBadge'),
    notesLabel: t('pdf.notesLabel')
  };

  // Safely resolve disclaimer translation: avoid passing untranslated key like 'visaPage.checklist.note'
  const rawDisclaimer = t('checklist.note.description') as string | undefined;
  const disclaimer = rawDisclaimer && rawDisclaimer.includes('.') ? undefined : rawDisclaimer;

  const handleDownload = () => {
    const countryName = countryData?.name || 'your country';
    exportChecklistPDF(`Common Short-stay (C) Checklist`, items, {
      countryName,
      isVisaFree,
      disclaimer,
      strings: pdfStrings,
      action: 'download'
    });
  };

  const handlePreview = async () => {
    const countryName = countryData?.name || 'your country';
    try {
      const url = await exportChecklistPDF(`Common Short-stay (C) Checklist`, items, {
        countryName,
        isVisaFree,
        disclaimer,
        strings: pdfStrings,
        action: 'preview'
      }) as string | undefined;

      if (url) {
        window.open(url, '_blank');
      }
    } catch (err) {
      // fallback: download
      exportChecklistPDF(`Common Short-stay (C) Checklist`, items, {
        countryName,
        isVisaFree,
        disclaimer,
        strings: pdfStrings,
        action: 'download'
      });
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-danube-mist overflow-visible">
          {/* Main Content Area */}
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Full Width Title and Description */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-transylvanian-stone mb-3">
                {t("download.title")}
              </h2>
              <p className="text-transylvanian-stone/70 text-sm sm:text-base leading-relaxed mb-4">
                {t("download.description")}
              </p>
              {isVisaFree && (
                <div className="inline-flex items-center px-4 py-2 bg-carpathian-forest/10 text-carpathian-forest text-sm font-medium rounded-lg border border-carpathian-forest/20">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Visa-free for short stays
                </div>
              )}
            </div>

            {/* Controls Section - Mobile-First Layout */}
            <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
              {/* Country Selector Block */}
              <div className="bg-gray-50/50 rounded-lg p-4 sm:p-6 border border-gray-200/50">
                <label className="block text-sm font-medium text-transylvanian-stone mb-3">
                  {t("download.countryLabel")}
                </label>
                <div className="relative z-50">
                  <CountrySelector
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                  />
                </div>
              </div>

              {/* Download Block */}
              <div className="bg-tricolor-blue/5 rounded-lg p-4 sm:p-6 border border-tricolor-blue/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <span className="text-sm font-medium text-transylvanian-stone">
                    {t("download.downloadChecklist")}
                  </span>
                  <LastUpdated date={new Date().toISOString()} />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 relative z-40">
                  <button
                    onClick={handlePreview}
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-white text-tricolor-blue rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium border border-tricolor-blue/10 shadow-sm relative z-50 text-sm sm:text-base"
                  >
                    {t('download.preview')}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-tricolor-blue text-white rounded-lg hover:bg-tricolor-blue/90 transition-all duration-200 font-medium shadow-sm active:scale-[0.98] relative z-50 text-sm sm:text-base"
                  >
                    <span className="mr-1">{t("download.button")}</span>
                    {/* <span className="text-xs opacity-80">(PDF)</span> */}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-4 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm text-transylvanian-stone/60">
              <div className="flex items-start sm:items-center gap-2">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5 sm:mt-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="leading-tight">{t('disclaimer')}</span>
              </div>
              <span className="whitespace-nowrap text-right">{t('download.lastUpdated')}: 8/25/2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
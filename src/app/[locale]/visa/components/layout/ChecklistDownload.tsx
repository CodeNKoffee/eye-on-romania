"use client";
import { useTranslations } from "next-intl";
import { exportChecklistPDF } from "@/lib/pdf";
import LastUpdated from '@/components/LastUpdated';
import CountrySelector from "../ui/CountrySelector";
import { useVisaData } from "../../hooks/useVisaData";

export default function ChecklistDownload() {
  const t = useTranslations("visaPage");
  const { selectedCountry, setSelectedCountry, requirements, isVisaFree, countryData } = useVisaData();

  // Load Egyptian requirements from translations when available; fallback to a hard-coded list
  // next-intl may return a string for t(...) by default; coerce via unknown and validate with Array.isArray
  const rawTranslated: unknown = t('egypt.requirementsList', { returnObjects: true } as any);
  const translatedEgyptRequirements = Array.isArray(rawTranslated) ? (rawTranslated as string[]) : undefined;
  const fallbackEgyptRequirements = [
    "Passport scan (valid 6+ months beyond intended stay)",
    "EU visa application form (filled automatically after completing online form on Romanian Embassy eVisa portal in Cairo)",
    "2 personal photos (35x45mm, color, white background)",
    "Proof of 2-way go and return ticket (roundtrip flight reservation)",
    "Travel insurance (minimum €30,000 coverage for Schengen area)",
    "Proof of accommodation (hotel bookings, invitation letter, or host arrangements)",
    "Bank account statement (or of parent/guardian if student) - last 3-6 months",
    "University registration certificate (if student) OR employment letter (if employed)",
    "Individual registration certificate",
    "Letter of invitation and reimbursement (if available) for cultural visits",
    "Movements certificate of your last 7 years in and out of your country (required if haven't had Schengen visa before)",
    "Purpose of visit documentation (cultural activities, business meetings, tourism)"
  ];

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
    
    // Use translated Egyptian requirements if present, otherwise fallback to the English hard-coded array,
    // otherwise default to the original requirements from country data
    if (countryData?.code === 'EG') {
      return translatedEgyptRequirements && translatedEgyptRequirements.length > 0
        ? translatedEgyptRequirements
        : fallbackEgyptRequirements;
    }
    return requirements.items;
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
    <section className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-danube-mist overflow-visible">
          {/* Main Content Area */}
          <div className="p-8">
            {/* Full Width Title and Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-transylvanian-stone mb-3">
                {t("download.title")}
              </h2>
              <p className="text-transylvanian-stone/70 text-base leading-relaxed mb-4">
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

            {/* Controls Section - Full Width */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Country Selector Block */}
              <div className="bg-gray-50/50 rounded-lg p-6 border border-gray-200/50">
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
              <div className="bg-tricolor-blue/5 rounded-lg p-6 border border-tricolor-blue/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-transylvanian-stone">
                    {t("download.downloadChecklist")}
                  </span>
                  <LastUpdated date={new Date().toISOString()} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-40">
                  <button
                    onClick={handlePreview}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-tricolor-blue rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium border border-tricolor-blue/10 shadow-sm relative z-50"
                  >
                    {t('download.preview')}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center justify-center px-6 py-3 bg-tricolor-blue text-white rounded-lg hover:bg-tricolor-blue/90 transition-all duration-200 font-medium shadow-sm active:scale-[0.98] relative z-50"
                  >
                    <span className="mr-1">{t("download.button")}</span>
                    {/* <span className="text-xs opacity-80">(PDF)</span> */}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-transylvanian-stone/60">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>{t('disclaimer')}</span>
              </div>
              <span className="whitespace-nowrap">{t('download.lastUpdated')}: 8/25/2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
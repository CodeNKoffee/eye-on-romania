"use client";
import { useTranslations } from "next-intl";
import { exportChecklistPDF } from '@/lib/pdf';
import LastUpdated from '@/components/LastUpdated';
import CountrySelector from "../ui/CountrySelector";
import { useVisaData } from "../../hooks/useVisaData";

export default function ChecklistDownload() {
  const t = useTranslations("visaPage");
  const { selectedCountry, setSelectedCountry, requirements, isVisaFree } = useVisaData();

  const items = requirements.visaRequired 
    ? requirements.items 
    : [t("checklist.noVisaRequired")];

  const handleDownload = () => {
    exportChecklistPDF(`visa_checklist_${selectedCountry}`, items);
  };

  return (
    <section className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-transylvanian-stone mb-2">
                {t("download.title")}
              </h2>
              <p className="text-transylvanian-stone/70">
                {t("download.description")}
              </p>
              {isVisaFree && (
                <div className="mt-2 inline-flex items-center px-3 py-1 bg-carpathian-forest/10 text-carpathian-forest text-sm rounded-full">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Visa-free for short stays
                </div>
              )}
            </div>
            <div className="flex flex-col items-end gap-3">
              <CountrySelector
                value={selectedCountry}
                onChange={setSelectedCountry}
              />
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-4 py-2 bg-tricolor-blue text-white rounded hover:bg-tricolor-blue/90 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t("download.button")}
                </button>
                <LastUpdated date={new Date().toISOString()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
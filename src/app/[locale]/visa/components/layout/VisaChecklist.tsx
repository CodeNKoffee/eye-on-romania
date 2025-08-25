"use client";
import { useTranslations } from "next-intl";
import CheckListItem from "../ui/CheckListItem";
import { useVisaData } from "../../hooks/useVisaData";

export default function VisaChecklist() {
  const t = useTranslations("visaPage");
  const { requirements, isVisaFree, countryData } = useVisaData();

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
                No Visa Required
              </h3>
              <p className="text-transylvanian-stone/70 mb-4">
                Citizens of {countryData?.name || 'your country'} can enter Romania visa-free for tourist or business stays up to 90 days within any 180-day period.
              </p>
              <div className="text-sm text-transylvanian-stone/60">
                <p>You'll still need:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Valid passport (6+ months remaining validity)</li>
                  <li>• Proof of sufficient funds</li>
                  <li>• Return/onward travel ticket</li>
                  <li>• Travel insurance (recommended)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
              {t("checklist.title")}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {requirements.items.map((item, index) => (
              <CheckListItem key={index} text={item} />
            ))}
          </div>

          {requirements.consulateUrl && (
            <div className="mt-6 p-4 bg-tricolor-blue/5 rounded-lg border border-tricolor-blue/20">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-tricolor-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <div>
                  <h4 className="font-semibold text-transylvanian-stone mb-1">Your Local Consulate</h4>
                  <p className="text-sm text-transylvanian-stone/70 mb-2">
                    For specific requirements and to submit your application:
                  </p>
                  <a 
                    href={requirements.consulateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-tricolor-blue hover:underline text-sm"
                  >
                    Romanian Consulate in {countryData?.name}
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
                <h4 className="font-semibold text-transylvanian-stone mb-1">{t("checklist.note.title")}</h4>
                <p className="text-sm text-transylvanian-stone/70">
                  {t("checklist.note.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

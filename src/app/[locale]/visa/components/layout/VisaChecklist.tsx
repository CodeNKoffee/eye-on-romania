"use client";
import { useTranslations } from "next-intl";
import CheckListItem from "../ui/CheckListItem";
import { useVisaData } from "../../hooks/useVisaData";

export default function VisaChecklist() {
  const t = useTranslations("visaPage");
  const { requirements, isVisaFree, countryData } = useVisaData();

  // Updated requirements for Egyptian citizens based on actual experience
  const egyptianRequirements = [
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

  // Use Egyptian requirements if the selected country is Egypt, otherwise use the original requirements
  const currentRequirements = countryData?.code === 'EG' ? egyptianRequirements : requirements.items;

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
              Common Short-stay (C) Checklist
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
                  <h4 className="font-semibold text-amber-800 mb-1">Confirmed Requirements for Egyptian Citizens</h4>
                  <p className="text-sm text-amber-700">
                    Based on actual visa applications processed in June 2025. Type C visa valid for 7-8 days cultural visits.
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
                    <h4 className="font-semibold text-blue-800 mb-1">Important Notes</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Criminal record certificate NOT required for short stays (7-8 days)</li>
                      <li>• Movements certificate only needed if you haven't had a Schengen visa before</li>
                      <li>• Students can use parent/guardian bank statements</li>
                      <li>• Cultural visit letters can include reimbursement details if applicable</li>
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
                  <h4 className="font-semibold text-transylvanian-stone mb-1">Romanian Embassy in Cairo</h4>
                  <p className="text-sm text-transylvanian-stone/70 mb-2">
                    For Egyptian citizens, submit your application at:
                  </p>
                  <a 
                    href={requirements.consulateUrl || "https://cairo.mae.ro/"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-tricolor-blue hover:underline text-sm"
                  >
                    Romanian Embassy in Cairo - eVisa Portal
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
                <h4 className="font-semibold text-transylvanian-stone mb-1">Disclaimer</h4>
                <p className="text-sm text-transylvanian-stone/70">
                  Requirements may vary based on individual circumstances. Always confirm current requirements with the Romanian Embassy before applying. This information is based on successful applications from June 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import { useState } from 'react';
import { exportChecklistPDF } from '@/lib/pdf';
import LastUpdated from '@/components/LastUpdated';

export default function VisaPage() {
  const [items] = useState([
    'Passport (valid 6+ months)',
    'Roundtrip reservation',
    'Travel insurance',
    'Proof of accommodation',
    'Financial means evidence',
    'Completed application form',
    'Recent passport photos',
    'Purpose of visit documentation'
  ]);

  const visaTypes = [
    {
      type: "Short-stay (C)",
      duration: "Up to 90 days",
      purpose: "Tourism, business visits, family",
      color: "tricolor-blue"
    },
    {
      type: "Long-stay (D)",
      duration: "Over 90 days",
      purpose: "Work, study, family reunification",
      color: "tricolor-red"
    },
    {
      type: "Transit (A)",
      duration: "24-48 hours",
      purpose: "Airport/territory transit",
      color: "carpathian-forest"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-paper to-danube-mist">
      <div className="container mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-transylvanian-stone mb-4">
              Visa & Entry — <span className="font-semibold">Overview</span>
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-tricolor-yellow/20 border border-tricolor-yellow/30 rounded-full">
              <svg className="w-4 h-4 text-tricolor-yellow mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-transylvanian-stone font-medium">Informational guidance only. Not legal advice.</span>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold text-transylvanian-stone mb-2">
                  Complete Visa Checklist
                </h2>
                <p className="text-transylvanian-stone/70">
                  Download a comprehensive, printable checklist for your visa application.
                </p>
              </div>
              <div className="flex flex-col items-end gap-3">
                <button
                  onClick={() => exportChecklistPDF('visa_checklist', items)}
                  className="inline-flex items-center px-6 py-3 bg-tricolor-blue text-white rounded-lg hover:bg-tricolor-blue/90 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download checklist (PDF)
                </button>
                <LastUpdated date={new Date().toISOString()} />
              </div>
            </div>
          </div>

          {/* Visa Types Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {visaTypes.map((visa, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-danube-mist p-6 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 bg-${visa.color}/10 rounded-lg flex items-center justify-center mb-4`}>
                  <div className={`w-6 h-6 bg-${visa.color} rounded-full`}></div>
                </div>
                <h3 className="text-lg font-semibold text-transylvanian-stone mb-2">{visa.type}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-transylvanian-stone/60">Duration:</span>
                    <span className="font-medium text-transylvanian-stone">{visa.duration}</span>
                  </div>
                  <div className="text-transylvanian-stone/70">{visa.purpose}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Checklist */}
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
            
            <div className="grid md:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-danube-mist/30 transition-colors">
                  <div className="w-5 h-5 border-2 border-tricolor-blue rounded flex-shrink-0 mt-0.5"></div>
                  <span className="text-transylvanian-stone">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-danube-mist/50 rounded-lg border border-danube-mist">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-tricolor-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-transylvanian-stone mb-1">Important Note</h4>
                  <p className="text-sm text-transylvanian-stone/70">
                    Requirements may vary by nationality and specific circumstances. Always consult the official Romanian consulate or embassy in your country for the most current and specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sources Section */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-danube-mist p-6">
            <h3 className="text-lg font-semibold text-transylvanian-stone mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-tricolor-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Official Sources
            </h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-tricolor-blue hover:underline">Ministry of Foreign Affairs - Visa Information</a>
              <a href="#" className="block text-tricolor-blue hover:underline">Romanian Immigration Office</a>
              <a href="#" className="block text-tricolor-blue hover:underline">EU Visa Policy Guidelines</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
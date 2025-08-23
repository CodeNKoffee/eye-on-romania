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
  ]);

  return (
    <div className="container py-10">
      <h2 className="text-2xl font-semibold">Visa & Entry — Overview</h2>
      <p className="mt-2 text-sm text-transylvanian-stone/80">Informational guidance only. Not legal advice.</p>
      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={() => exportChecklistPDF('visa_checklist', items)}
          className="px-4 py-2 bg-tricolor-blue text-white rounded"
        >
          Download checklist (PDF)
        </button>
        <LastUpdated date={new Date().toISOString()} />
      </div>

      <section className="mt-8">
        <h3 className="font-semibold">Common short-stay (C) checklist</h3>
        <ul className="mt-2 list-disc list-inside text-sm">
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

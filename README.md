## Eye On Romania — a small brochure

<p align="center">
  <img src="./assets/Yellow Blue Red Flag.jpg" alt="Romania landscape" width="100%" style="border-radius:12px;">
  Photo by <a href="https://unsplash.com/@adspedia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Val Vesa</a> on <a href="https://unsplash.com/photos/yellow-blue-and-red-flag-Lr1UXDUjgdE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      
</p>

Welcome to Eye On Roman ia — a compact, practical Next.js starter that looks and feels like a travel brochure while shipping real features for visitors, students, professionals and partners.

This README is written as a mini brochure + quick start guide: a short site preview, key features, how to run it locally, and where to look in the codebase.

## Quick visual preview (mini brochure)

<div style="display:flex;gap:16px;flex-wrap:wrap;margin:24px 0;">
  <div style="flex:1;min-width:260px;background:#fff;border-radius:10px;padding:18px;box-shadow:0 6px 18px rgba(0,0,0,0.06);">
    <img src="./assets/Romania Scenic Photo (1).jpg" alt="city" style="width:100%;border-radius:8px;margin-bottom:10px;">
    Photo by <a href="https://unsplash.com/@felipesimo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Felipe Simo</a> on <a href="https://unsplash.com/photos/green-trees-beside-white-building-8fgwgkkowDY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>  
    <br><br>
    <h3 style="margin:0 0 8px 0">Visa & Entry</h3>
    <p style="margin:0;color:#4b5563;font-size:14px">Step-by-step checklists, official sources, and a printable PDF you can download per country.</p>
  </div>

  <div style="flex:1;min-width:260px;background:#fff;border-radius:10px;padding:18px;box-shadow:0 6px 18px rgba(0,0,0,0.06);">
    <img src="./assets/Romania Scenic Photo.jpg" alt="mountains" style="width:100%;border-radius:8px;margin-bottom:10px;">
    Photo by <a href="https://unsplash.com/@talon3383?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Butuza Gabriel</a> on <a href="https://unsplash.com/photos/a-body-of-water-with-boats-and-trees-around-it-zLIMxP0SHZA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    <br><br>
    <h3 style="margin:0 0 8px 0">Study, Work, Travel</h3>
    <p style="margin:0;color:#4b5563;font-size:14px">Paths for students, professionals, and travellers — localized content with i18n and a clean UI.</p>
  </div>

  <div style="flex:1;min-width:260px;background:#fff;border-radius:10px;padding:18px;box-shadow:0 6px 18px rgba(0,0,0,0.06);">
    <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f3a6b7d2a8c3e4d5b6f" alt="culture" style="width:100%;border-radius:8px;margin-bottom:10px;">
    <h3 style="margin:0 0 8px 0">Sourced & Printable</h3>
    <p style="margin:0;color:#4b5563;font-size:14px">All guidance is sourced to official sites and exportable as client-side PDFs using jspdf.</p>
  </div>
</div>

## Key features

- Clean Next.js 14+ app directory structure with TypeScript.
- i18n-ready content under `src/locales` and route-aware pages in `src/app/[locale]`.
- Visa flow: country selector, tailored requirements, official sources listing, printable checklist (client PDF).
- Reusable UI components: Hero, Ribbon, Navigation Cards, Value Pillars, and Visa UI modules.
- Small, focused dataset in `src/app/[locale]/visa/data` for country info and official links.
- Lightweight client state for visa selection (`useVisaData` hook).

## Where to look (mini-code map)

- `src/app/[locale]/page.tsx` — localized homepage layout and `Hero`.
- `src/app/[locale]/visa` — all visa pages and components (Hero, VisaTypes, Checklist, OfficialSources).
- `src/locales/en.json` — English translations used by `next-intl`.
- `src/app/[locale]/visa/hooks/useVisaData.ts` — hook that wires country selection to requirements.
- `src/app/[locale]/visa/data` — data modules: `officialSource.ts`, `countryRequirements.ts`, `countries.ts`.

## How to run (developer quick start)

Clone and install dependencies, then start the dev server:

```bash
git clone https://github.com/CodeNKoffee/eye-on-romania.git
cd eye-on-romania
npm install
npm run dev
```

Open http://localhost:3000 and pick a locale (the app uses route-based locales at `/en` and `/ro`).

Build for production:

```bash
npm run build
npm run start
```

Notes:

- The project was scaffolded with `create-next-app` and expects a modern Node.js (18+) runtime.
- Optional dev dependencies used by the project: `framer-motion`, `jspdf`, `zustand` (verify `package.json` for exact versions).

## Quick tips for editing

- Add or edit translations in `src/locales/*.json` and restart dev server if you change message keys.
- Add new visa countries in `src/app/[locale]/visa/data/countries.ts` and map requirements in `countryRequirements.ts`.
- UI components live under `src/app/[locale]/components` and `src/app/[locale]/visa/components`.

## Accessibility & content sourcing

- The Visa pages include a small list of official sources in `officialSource.ts`. Keep those links authoritative.
- The markup aims for semantic headings, ARIA labels on selectors, and sensible keyboard focus for the forms.

## Contributing

1. Fork the repo, create a feature branch, and open a PR describing the change.
2. Keep UI components isolated and add small tests for any data transformation.

## License

This starter is provided as-is. Add your preferred license file if you intend to publish or redistribute.

---

If you want, I can also:

- Add a ready-to-use screenshot or live demo deployment section.
- Generate small SVG thumbnails for the README instead of external photos.
- Produce a shareable `deploy` script tuned for Vercel or Netlify.

Enjoy exploring the codebase — open `src/app/[locale]/visa` to see the visa flow live.

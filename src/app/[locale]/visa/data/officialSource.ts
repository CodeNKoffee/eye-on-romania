export interface OfficialSource {
  title: string;
  url: string;
}

export function getOfficialSources(): OfficialSource[] {
  return [
    {
      title: "Romanian Ministry of Foreign Affairs - Visa Information",
      url: "https://www.mae.ro/en/node/2035"
    },
    {
      title: "Romanian Immigration Office (IGI)",
      url: "https://igi.mai.gov.ro/en/"
    },
    {
      title: "EU Visa Policy Guidelines",
      url: "https://ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas/visa-policy_en"
    },
    {
      title: "Romanian Consulates Worldwide Directory",
      url: "https://www.mae.ro/en/node/2045"
    },
    {
      title: "Schengen Visa Information Portal",
      url: "https://ec.europa.eu/home-affairs/what-we-do/policies/borders-and-visas/visa-policy_en"
    }
  ];
}
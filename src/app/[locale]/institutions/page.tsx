import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Ribbon from '@/components/Ribbon';
import InstitutionsHero from './components/InstitutionsHero';
import PartnershipTypes from './components/PartnershipTypes';
import PartnershipServices from './components/PartnershipServices';
import PartnershipBenefits from './components/PartnershipBenefits';
import InstitutionContact from './components/InstitutionContact';
import SuccessStories from './components/SuccessStories';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('institutionsPage');
  
  return {
    title: `${t('titlePrefix')} ${t('titleHighlight')} | Eye on Romania`,
    description: t('description'),
  };
}

export default function InstitutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Ribbon />
      <div className="container mx-auto px-4 py-8">
        <InstitutionsHero />
        <PartnershipTypes />
        <PartnershipServices />
        <PartnershipBenefits />
        <SuccessStories />
        <InstitutionContact />
      </div>
    </div>
  );
}

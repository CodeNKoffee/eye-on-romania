"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-transylvanian-stone text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Eye on Romania</h3>
            <p className="text-white/80 mb-4 max-w-md">
              {t('description')}
            </p>
            <div className="flex gap-2">
              <div className="w-6 h-1 bg-tricolor-blue rounded"></div>
              <div className="w-6 h-1 bg-tricolor-yellow rounded"></div>
              <div className="w-6 h-1 bg-tricolor-red rounded"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('quickLinks.title')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/visa`} className="text-white/80 hover:text-white transition-colors">
                  {t('quickLinks.visa')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/work`} className="text-white/80 hover:text-white transition-colors">
                  {t('quickLinks.work')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/business`} className="text-white/80 hover:text-white transition-colors">
                  {t('quickLinks.business')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/study`} className="text-white/80 hover:text-white transition-colors">
                  {t('quickLinks.study')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/travel`} className="text-white/80 hover:text-white transition-colors">
                  {t('quickLinks.travel')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('legal.title')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/privacy`} className="text-white/80 hover:text-white transition-colors">
                  {t('legal.privacy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-white/80 hover:text-white transition-colors">
                  {t('legal.terms')}
                </Link>
              </li>
            </ul>
            
            <div className="mt-6">
              <p className="text-xs text-white/60">
                {t('disclaimer')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            © 2025 Eye on Romania. {t('copyright')}
          </p>
          <p className="text-xs text-white/50 mt-2 md:mt-0">
            {t('lastUpdated')}: September 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

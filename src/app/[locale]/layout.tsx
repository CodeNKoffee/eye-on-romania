import { Noto_Sans, Inter } from "next/font/google"; 
import "../globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {getMessages} from 'next-intl/server';
import Footer from '@/components/Footer';

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <div className={`${notoSans.className} ${inter.className}`}>
      <NextIntlClientProvider messages={messages}>
        {children}
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
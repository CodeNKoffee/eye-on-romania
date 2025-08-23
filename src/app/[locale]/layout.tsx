import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EyeOnRomania — A clear window into Romania",
  description: "Culture, travel, study, and business guidance for Romania — trusted, practical, and public-sector friendly.",
  keywords:
    "Romania, travel, culture, study, business, guidance",
  authors: [{ name: "EyeOnRomania Team" }],
  creator: "Hatem Soliman",
  publisher: "Hatem Soliman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://eyeonromania.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EyeOnRomania - A clear window into Romania",
    description:
      "Discover the beauty and culture of Romania with EyeOnRomania. Your trusted source for travel, study, and business guidance.",
    url: "https://eyeonromania.com",
    siteName: "EyeOnRomania",
    images: [
      {
        url: "/QMaster-512.svg",
        width: 512,
        height: 512,
        alt: "EyeOnRomania Logo - A clear window into Romania",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EyeOnRomania - A clear window into Romania",
    description:
      "Discover the beauty and culture of Romania with EyeOnRomania. Your trusted source for travel, study, and business guidance.",
    images: ["/QMaster-512.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import Link from "next/link";

interface NavigationCardProps {
  title: string;
  description: string;
  href: string;
  variant?: number;
}

function Icon({ variant = 0 }: { variant?: number }) {
  const outer = [
    'bg-tricolor-blue/10',
    'bg-carpathian-forest/10',
    'bg-tricolor-red/10',
    'bg-tricolor-yellow/20',
  ][variant % 4];

  const inner = [
    'text-tricolor-blue',
    'text-carpathian-forest',
    'text-tricolor-red',
    'text-tricolor-yellow',
  ][variant % 4];

  // pick an icon per variant that matches the original page visuals
  const svgs = [
    // visa-like document
    (
      <svg className={`w-7 h-7 ${inner}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    // travel/map pin
    (
      <svg className={`w-7 h-7 ${inner}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    // study/book
    (
      <svg className={`w-7 h-7 ${inner}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    // business/briefcase
    (
      <svg className={`w-7 h-7 ${inner} stroke-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  ];

  return (
    <div className={`w-14 h-14 ${outer} rounded-lg flex items-center justify-center mb-6 group-hover:${outer.replace('/10','/20')} transition-colors`}>
      {svgs[variant % svgs.length]}
    </div>
  );
}

export default function NavigationCards({ title, description, href, variant = 0 }: NavigationCardProps) {
  // color class to apply to the 'cta' and hover of title
  const ctaColor = ['text-tricolor-blue', 'text-carpathian-forest', 'text-tricolor-red', 'text-tricolor-yellow'][variant % 4];

  return (
    <Link
      href={href}
      className="group p-8 bg-white rounded-xl shadow-sm border border-danube-mist hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <Icon variant={variant} />
      <h3 className={`text-xl font-semibold text-transylvanian-stone mb-3 group-hover:${ctaColor} transition-colors`}>
        {title}
      </h3>
      <p className="text-transylvanian-stone/70 leading-relaxed">
        {description}
      </p>
      <div className={`mt-4 ${ctaColor} font-medium group-hover:underline`}>
        {ctaColor === 'text-tricolor-blue' ? 'Explore guides →' : ctaColor === 'text-carpathian-forest' ? 'View itineraries →' : ctaColor === 'text-tricolor-red' ? 'Explore paths →' : 'Start here →'}
      </div>
    </Link>
  );
};

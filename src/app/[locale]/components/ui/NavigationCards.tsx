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
    'bg-tricolor-blue/10',
  ][variant % 5];

  const inner = [
    'text-tricolor-blue',
    'text-carpathian-forest',
    'text-tricolor-red',
    'text-tricolor-yellow',
    'text-carpathian-forest',
  ][variant % 5];

  // pick an icon per variant that matches the original page visuals
  const svgs = [
    // visa-like document
    (
      <svg className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${inner}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    // travel/map pin
    (
      <svg className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${inner}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    // business/briefcase
    (
      <svg className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${inner}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    ),
    // study/book
    (
      <svg className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${inner}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    // travel/map pin
    (
      <svg className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${inner}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  ];

  return (
    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${outer} rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:${outer.replace('/10','/20')} transition-colors`}>
      {svgs[variant % svgs.length]}
    </div>
  );
}

export default function NavigationCards({ title, description, href, variant = 0 }: NavigationCardProps) {
  // color class to apply to the 'cta' and hover of title
  const ctaColor = ['text-tricolor-blue', 'text-carpathian-forest', 'text-tricolor-red', 'text-tricolor-yellow', 'text-carpathian-forest'][variant % 5];

  return (
    <Link
      href={href}
      className="group flex flex-col h-full p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-sm border border-danube-mist hover:shadow-lg active:shadow-md transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 touch-manipulation"
    >
      <Icon variant={variant} />
      <h3 className={`text-lg sm:text-xl font-semibold text-transylvanian-stone mb-2 sm:mb-3 group-hover:${ctaColor} transition-colors leading-tight`}>
        {title}
      </h3>
      <p className="text-sm sm:text-base text-transylvanian-stone/70 leading-relaxed flex-grow">
        {description}
      </p>
      <div className={`mt-3 sm:mt-4 ${ctaColor} font-medium group-hover:underline text-sm sm:text-base`}>
        {ctaColor === 'text-tricolor-blue' ? 'Explore guides →' : ctaColor === 'text-carpathian-forest' ? 'Start here →' : ctaColor === 'text-tricolor-red' ? 'Learn steps →' : ctaColor === 'text-tricolor-yellow' ? 'Explore paths →' : 'View itineraries →'}
      </div>
    </Link>
  );
};

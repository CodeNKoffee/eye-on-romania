"use client";
import { motion, useReducedMotion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function Ribbon() {
  const reduce = useReducedMotion();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    
    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.startsWith(`/${locale}`) 
      ? pathname.slice(`/${locale}`.length) 
      : pathname;
    
    // Navigate to the same path with the new locale
    const newPath = `/${newLocale}${pathWithoutLocale}` || `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <div className="w-full flex justify-center my-4 relative" aria-hidden>
      <motion.div
        className="flex gap-0 rounded-full overflow-hidden shadow-sm"
        animate={reduce ? undefined : 'animate'}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ pointerEvents: 'none' }}
      >
        <div className="w-40 h-2 bg-tricolor-blue" />
        <div className="w-40 h-2 bg-tricolor-yellow" />
        <div className="w-40 h-2 bg-tricolor-red" />
      </motion.div>
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

      {/* Locale picker (top-right) */}
      <div className="absolute right-6 top-[-6px]">
        <label htmlFor="locale" className="sr-only">Select language</label>
        <select 
          id="locale" 
          onChange={onLocaleChange} 
          value={locale}
          className="px-2 py-1 rounded-md border border-danube-mist bg-white text-sm focus:outline-none focus:ring-2 focus:ring-tricolor-blue focus:border-transparent"
        >
          <option value="en">EN</option>
          <option value="ro">RO</option>
        </select>
      </div>
    </div>
  );
}
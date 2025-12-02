'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove the current locale from the pathname
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === locale) {
      segments.shift();
    }

    // Construct new path with new locale
    const newPath = `/${newLocale}${segments.length > 0 ? '/' + segments.join('/') : ''}`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-2 border rounded-md p-1">
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-black text-white'
            : 'hover:bg-gray-100'
        }`}
      >
        English
      </button>
      <button
        onClick={() => switchLocale('es')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === 'es'
            ? 'bg-black text-white'
            : 'hover:bg-gray-100'
        }`}
      >
        Español
      </button>
    </div>
  );
}

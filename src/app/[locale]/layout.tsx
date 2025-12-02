import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import '../globals.css';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const t = await getTranslations('nav');
  const ft = await getTranslations('footer');

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <header className="border-b">
            <nav className="mx-auto max-w-5xl p-4 flex justify-between items-center">
              <div className="flex gap-6">
                <a href={`/${locale}`}>{t('home')}</a>
                <a href={`/${locale}/about`}>{t('about')}</a>
                <a href={`/${locale}/submit`}>{t('submit')}</a>
              </div>
              <LanguageSwitcher />
            </nav>
          </header>
          <main className="mx-auto max-w-5xl p-6">{children}</main>
          <footer className="border-t mt-16">
            <div className="mx-auto max-w-5xl p-4 text-sm">
              {ft('links')}{' '}
              <a
                className="underline"
                href="https://www.phoenix.gov/administration/departments/heat/tree-shade-programs/tree-grant-programs.html"
                target="_blank"
              >
                {ft('cityProgram')}
              </a>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

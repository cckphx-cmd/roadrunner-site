import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-semibold">{t('title')}</h1>
        <p className="mt-2">
          {t.rich('subtitle', {
            count: <strong>2 free shade trees</strong>,
          })}{' '}
          <a className="underline" href="#eligibility">{t('checkEligibility')}</a>.
        </p>
      </section>

      <section id="overview">
        <h2 className="text-2xl font-semibold">{t('overview.title')}</h2>
        <ul className="list-disc pl-5">
          <li>{t('overview.item1')}</li>
          <li>{t('overview.item2')}</li>
          <li>{t('overview.item3')}</li>
        </ul>
      </section>

      <section id="eligibility">
        <h2 className="text-2xl font-semibold">{t('eligibility.title')}</h2>
        <p>
          {t.rich('eligibility.description', {
            west: <strong>{t('eligibility.west')}</strong>,
            east: <strong>{t('eligibility.east')}</strong>,
            north: <strong>{t('eligibility.north')}</strong>,
            southSide: <strong>{t('eligibility.southSide')}</strong>,
            south: <strong>{t('eligibility.south')}</strong>,
          })}
        </p>
        <p>{t('eligibility.notSure')}</p>
        <p className="mt-2">
          <a
            className="underline"
            href="https://experience.arcgis.com/experience/4ff4f175842f4fc5b8b73f2f24a2c39d"
            target="_blank"
          >
            {t('eligibility.mapLink')}
          </a>
        </p>
      </section>

      <section id="species">
        <h2 className="text-2xl font-semibold">{t('species.title')}</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="underline"
            href="https://www.phoenix.gov/content/dam/phoenix/heatsite/documents/English%20Tree%20Species.pdf"
            target="_blank"
          >
            {t('species.englishList')}
          </a>
          <a
            className="underline"
            href="https://www.phoenix.gov/content/dam/phoenix/heatsite/documents/Spanish%20Tree%20Species.pdf"
            target="_blank"
          >
            {t('species.spanishList')}
          </a>
        </div>
      </section>
    </div>
  );
}

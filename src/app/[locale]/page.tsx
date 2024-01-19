import { TranslationProvider } from '@/contexts/translation';
import { HomePage } from '@/components/templates';
import { initTranslations } from '@/utils/i18n';

import type { Metadata } from 'next';

type HomeProps = {
  params: { locale: string };
};

export const generateMetadata = async ({
  params: { locale },
}: HomeProps): Promise<Metadata> => {
  const { t } = await initTranslations(locale, ['home']);

  return {
    description: t('description'),
    alternates: {
      canonical: locale === 'en' ? '/' : `/${locale}`,
    },
    openGraph: {
      url: locale === 'en' ? '/' : `/${locale}`,
      description: t('description'),
      locale: locale === 'en' ? 'en_US' : 'id_ID',
    },
  };
};

const Home = async ({ params: { locale } }: HomeProps) => {
  const { resources } = await initTranslations(locale, ['common', 'home']);

  return (
    <TranslationProvider
      locale={locale}
      namespaces={['common', 'home']}
      resources={resources}>
      <HomePage />
    </TranslationProvider>
  );
};

export default Home;

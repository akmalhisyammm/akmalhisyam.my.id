import { AboutPage } from '@/components/templates';
import { TranslationProvider } from '@/contexts/translation';
import { initTranslations } from '@/utils/i18n';

import type { Metadata } from 'next';

type AboutProps = {
  params: { locale: string };
};

export const generateMetadata = async ({
  params: { locale },
}: AboutProps): Promise<Metadata> => {
  const { t } = await initTranslations(locale, ['about']);

  return {
    title: t('title').split(' ')[0],
    description: t('description'),
    alternates: {
      canonical: locale === 'en' ? '/about' : `/${locale}/about`,
    },
    openGraph: {
      title: `${t('title').split(' ')[0]} | Akmal Hisyam`,
      url: locale === 'en' ? '/about' : `/${locale}/about`,
      description: t('description'),
      locale: locale === 'en' ? 'en_US' : 'id_ID',
    },
  };
};

const About = async ({ params: { locale } }: AboutProps) => {
  const { resources } = await initTranslations(locale, ['common', 'about']);

  return (
    <TranslationProvider
      locale={locale}
      namespaces={['common', 'about']}
      resources={resources}
    >
      <AboutPage />
    </TranslationProvider>
  );
};

export default About;

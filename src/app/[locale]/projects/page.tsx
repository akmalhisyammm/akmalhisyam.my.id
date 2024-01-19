import { TranslationProvider } from '@/contexts/translation';
import { ProjectsPage } from '@/components/templates';
import { initTranslations } from '@/utils/i18n';

import type { Metadata } from 'next';

type ProjectsProps = {
  params: { locale: string };
};

export const generateMetadata = async ({
  params: { locale },
}: ProjectsProps): Promise<Metadata> => {
  const { t } = await initTranslations(locale, ['projects']);

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'en' ? '/projects' : `/${locale}/projects`,
    },
    openGraph: {
      title: `${t('title')} | Akmal Hisyam`,
      url: locale === 'en' ? '/projects' : `/${locale}/projects`,
      description: t('description'),
      locale: locale === 'en' ? 'en_US' : 'id_ID',
    },
  };
};

const Projects = async ({ params: { locale } }: ProjectsProps) => {
  const { resources } = await initTranslations(locale, ['common', 'projects']);

  return (
    <TranslationProvider
      locale={locale}
      namespaces={['common', 'projects']}
      resources={resources}>
      <ProjectsPage />
    </TranslationProvider>
  );
};

export default Projects;

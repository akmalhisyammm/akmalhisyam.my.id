import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BASE_URL } from '@/constants/url';
import { Layout } from '@/components/layouts';
import { ProjectList } from '@/components/organisms';

import type { GetStaticProps } from 'next/types';

const Projects = () => {
  const { t } = useTranslation('projects');

  const router = useRouter();

  const currentLocale = (router.locale as 'en' | 'id' | undefined) ?? 'en';

  return (
    <Layout>
      <NextSeo
        title={t('title')}
        description={t('description')}
        canonical={`${BASE_URL}/${currentLocale === 'en' ? 'projects' : 'id/projects'}`}
        openGraph={{
          url: `${BASE_URL}/${currentLocale === 'en' ? 'projects' : 'id/projects'}`,
          title: `${t('title')} | Akmal Hisyam`,
          description: t('description'),
        }}
      />

      <ProjectList />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'projects'])),
    },
  };
};

export default Projects;

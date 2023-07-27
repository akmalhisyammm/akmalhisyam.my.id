import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BASE_URL } from '@/constants/url';
import { Layout } from '@/components/layouts';
import { Hero, ProjectGrid } from '@/components/organisms';

import type { GetStaticProps } from 'next/types';

const Home = () => {
  const { t } = useTranslation('home');

  const router = useRouter();

  const currentLocale = (router?.locale as 'en' | 'id' | undefined) ?? 'en';

  return (
    <Layout>
      <NextSeo
        description={t('description')}
        canonical={`${BASE_URL}/${currentLocale === 'en' ? '' : 'id'}`}
        openGraph={{
          url: `${BASE_URL}/${currentLocale === 'en' ? '' : 'id'}`,
          description: t('description'),
        }}
      />

      <Hero />
      <ProjectGrid />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'home'])),
    },
  };
};

export default Home;

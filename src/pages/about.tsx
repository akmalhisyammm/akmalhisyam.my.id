import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BASE_URL } from '@/constants/url';
import { Layout } from '@/components/layouts';
import { AboutFavoriteTS, AboutSummary } from '@/components/organisms';

import type { GetStaticProps } from 'next/types';

const About = () => {
  const { t } = useTranslation('about');

  const router = useRouter();

  const currentLocale = (router.locale as 'en' | 'id' | undefined) ?? 'en';

  return (
    <Layout>
      <NextSeo
        title={t('title').split(' ')[0]}
        description={t('description')}
        canonical={`${BASE_URL}/${currentLocale === 'en' ? 'about' : 'id/about'}`}
        openGraph={{
          url: `${BASE_URL}/${currentLocale === 'en' ? 'about' : 'id/about'}`,
          title: `${t('title').split(' ')[0]} | Akmal Hisyam`,
          description: t('description'),
        }}
      />

      <AboutSummary />
      <AboutFavoriteTS />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'about'])),
    },
  };
};

export default About;

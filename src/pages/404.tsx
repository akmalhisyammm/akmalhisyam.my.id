import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BASE_URL } from '@/constants/url';
import { NotFoundScreen } from '@/components/templates';

import type { GetStaticProps } from 'next/types';

const NotFound = () => {
  const { t } = useTranslation('404');

  const router = useRouter();

  const currentLocale = (router.locale as 'en' | 'id' | undefined) ?? 'en';

  return (
    <Box>
      <NextSeo
        title={t('title')}
        description={t('description')}
        canonical={`${BASE_URL}/${currentLocale === 'en' ? '*' : 'id/*'}`}
        openGraph={{
          url: `${BASE_URL}/${currentLocale === 'en' ? '*' : 'id/*'}`,
          title: `${t('title')} | Akmal Hisyam`,
          description: t('description'),
        }}
      />

      <NotFoundScreen />
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', '404')),
    },
  };
};

export default NotFound;

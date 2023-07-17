import { NextSeo } from 'next-seo';

import { BASE_URL } from '@/constants/url';
import { FavoriteTS, Summary } from '@/components/about';
import Layout from '@/components/layout';

const About = () => {
  return (
    <Layout>
      <NextSeo
        title="About"
        canonical={`${BASE_URL}/about`}
        openGraph={{
          title: 'About | Akmal Hisyam',
          description: "Muhammad Akmal Hisyam's about",
        }}
      />

      <Summary />
      <FavoriteTS />
    </Layout>
  );
};

export default About;

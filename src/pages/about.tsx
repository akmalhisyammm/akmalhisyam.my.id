import { NextSeo } from 'next-seo';

import { BASE_URL } from '@/constants/url';
import { Layout } from '@/components/layouts';
import { AboutContent } from '@/components/organisms';

const About = () => {
  return (
    <Layout>
      <NextSeo
        title="About"
        canonical={`${BASE_URL}/about`}
        openGraph={{
          title: 'About | Akmal Hisyam',
          description: "Akmal Hisyam's about",
        }}
      />

      <AboutContent />
    </Layout>
  );
};

export default About;

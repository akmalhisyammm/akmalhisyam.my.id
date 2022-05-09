import { NextSeo } from 'next-seo';
import { baseUrl } from 'constants/baseUrl';
import Layout from 'components/layout';
import { FavoriteTS, Summary } from 'components/about';

const About = () => {
  return (
    <Layout>
      <NextSeo
        title="About"
        canonical={`${baseUrl}/about`}
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

import { Layout } from '@/components/layouts';
import { FavoriteTechStack, Summary } from '@/components/organisms';

const AboutPage = () => {
  return (
    <Layout>
      <Summary />
      <FavoriteTechStack />
    </Layout>
  );
};

export default AboutPage;

import { Layout } from '@/components/layouts';
import { FeaturedProjects, Hero } from '@/components/organisms';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
    </Layout>
  );
};

export default HomePage;

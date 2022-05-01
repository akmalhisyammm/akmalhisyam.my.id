import Layout from 'components/layout';
import { FeaturedProjects, Hero } from 'components/home';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
    </Layout>
  );
};

export default Home;

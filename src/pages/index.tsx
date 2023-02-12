import { FeaturedProjects, Hero } from 'components/home';
import Layout from 'components/layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
    </Layout>
  );
};

export default Home;

import Layout from 'components/layout';
import { FavoriteTS, Summary } from 'components/about';

const About = () => {
  return (
    <Layout title="About">
      <Summary />
      <FavoriteTS />
    </Layout>
  );
};

export default About;

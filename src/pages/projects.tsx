import { NextSeo } from 'next-seo';

import { BASE_URL } from 'constants/url';
import { AllProjects } from 'components/projects';
import Layout from 'components/layout';

const Projects = () => {
  return (
    <Layout>
      <NextSeo
        title="Projects"
        canonical={`${BASE_URL}/projects`}
        openGraph={{
          title: 'Projects | Akmal Hisyam',
          description: "Muhammad Akmal Hisyam's projects",
        }}
      />

      <AllProjects />
    </Layout>
  );
};

export default Projects;

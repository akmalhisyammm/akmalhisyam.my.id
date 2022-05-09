import { NextSeo } from 'next-seo';
import { baseUrl } from 'constants/baseUrl';
import Layout from 'components/layout';
import { AllProjects } from 'components/projects';

const Projects = () => {
  return (
    <Layout>
      <NextSeo
        title="Projects"
        canonical={`${baseUrl}/projects`}
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

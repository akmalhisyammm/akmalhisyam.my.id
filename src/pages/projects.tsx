import { NextSeo } from 'next-seo';

import { BASE_URL } from '@/constants/url';
import { Layout } from '@/components/layouts';
import { ProjectList } from '@/components/organisms';

const Projects = () => {
  return (
    <Layout>
      <NextSeo
        title="Projects"
        canonical={`${BASE_URL}/projects`}
        openGraph={{
          title: 'Projects | Akmal Hisyam',
          description: "Akmal Hisyam's projects",
        }}
      />

      <ProjectList />
    </Layout>
  );
};

export default Projects;

'use client';

import { Box, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { BrandHeading } from '@/components/atoms';
import { ProjectItem } from '@/components/molecules';
import { ProjectContext } from '@/contexts/project';

const AllProjects = () => {
  const { projects } = useContext(ProjectContext);
  const { t } = useTranslation('projects');

  return (
    <Box marginBottom={4}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut' }}
      >
        <BrandHeading as="h2" size="2xl" paddingBottom={2}>
          {t('title')}
        </BrandHeading>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <SimpleGrid columns={[1, 1, 2]} gap={4} marginY={4}>
          {projects
            .sort((a, b) => (b.id > a.id ? 1 : -1))
            .map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
                }}
              >
                <ProjectItem
                  href={project.link}
                  name={project.name}
                  description={project.description}
                  techStacks={project.techStacks}
                  type={project.type}
                  logoSrc={project.logo}
                />
              </motion.div>
            ))}
        </SimpleGrid>
      </motion.div>
    </Box>
  );
};

export default AllProjects;

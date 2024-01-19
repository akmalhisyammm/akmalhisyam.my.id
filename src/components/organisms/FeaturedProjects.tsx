'use client';

import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Box, Button, SimpleGrid } from '@chakra-ui/react';

import { ProjectContext } from '@/contexts/project';
import { BrandHeading, RouteLink } from '@/components/atoms';
import { ProjectCard } from '@/components/molecules';

const FeaturedProjects = () => {
  const { projects } = useContext(ProjectContext);
  const { t } = useTranslation('home');

  return (
    <Box marginY={4}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', delay: 0.2 }}>
        <BrandHeading as="h3" size="lg" paddingBottom={1}>
          {t('featuredProjects.title')}
        </BrandHeading>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.4,
            },
          },
        }}
        initial="hidden"
        animate="show">
        <SimpleGrid columns={[1, 2, 2]} gap={4} marginY={4}>
          {projects
            .filter((project) => project.isFeatured)
            .sort((a, b) => (b.id > a.id ? 1 : -1))
            .map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
                }}>
                <ProjectCard
                  href={project.link}
                  name={project.name}
                  previewSrc={project.preview}
                  logoSrc={project.logo}
                />
              </motion.div>
            ))}
        </SimpleGrid>
        <RouteLink href="/projects">
          <Button
            colorScheme="blue"
            variant="outline"
            size="lg"
            borderRadius="full"
            width="full">
            {t('featuredProjects.cta')}
          </Button>
        </RouteLink>
      </motion.div>
    </Box>
  );
};

export default FeaturedProjects;

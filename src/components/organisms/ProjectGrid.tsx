import { useContext } from 'react';
import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import { ProjectContext } from '@/contexts/project';
import { ChakraHeading } from '@/components/atoms';
import { ProjectCard } from '@/components/molecules';

const ProjectGrid = () => {
  const { t } = useTranslation('home');

  const router = useRouter();

  const projectsCtx = useContext(ProjectContext);

  return (
    <Box marginY={4}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', delay: 0.2 }}>
        <ChakraHeading as="h3" size="lg" paddingBottom={1}>
          {t('featured.projects.title')}
        </ChakraHeading>
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
          {projectsCtx.projects
            .filter((project) => project.isFeatured)
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
        <Button
          colorScheme="blue"
          variant="outline"
          size="lg"
          borderRadius="full"
          width="full"
          onClick={() => router.push('/projects')}>
          {t('featured.projects.cta')}
        </Button>
      </motion.div>
    </Box>
  );
};

export default ProjectGrid;

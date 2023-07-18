import { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { ProjectContext } from '@/contexts/project';
import { ChakraHeading } from '@/components/atoms';
import { ProjectItem } from '@/components/molecules';

const ProjectList = () => {
  const projectsCtx = useContext(ProjectContext);

  return (
    <Box marginBottom={8}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut' }}>
        <ChakraHeading as="h2">Projects</ChakraHeading>
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
        animate="show">
        <Box marginY={6}>
          {projectsCtx.projects
            .sort((a, b) => (b.id > a.id ? 1 : -1))
            .map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
                }}>
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
        </Box>
      </motion.div>
    </Box>
  );
};

export default ProjectList;

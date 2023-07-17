import { useContext } from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { ProjectContext } from '@/contexts/project';

const FeaturedProjects = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const projectsCtx = useContext(ProjectContext);

  return (
    <Box marginY={8}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', delay: 0.2 }}>
        <Heading as="h3" fontSize={24}>
          Featured Projects
        </Heading>
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
        <SimpleGrid columns={[1, 2, 2]} gap={6} marginY={4}>
          {projectsCtx.projects
            .filter((project) => project.isFeatured)
            .map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
                }}>
                <ChakraLink href={project.link} isExternal>
                  <Box
                    borderRadius={18}
                    overflow="hidden"
                    position="relative"
                    borderWidth={2}
                    height={200}
                    cursor="pointer"
                    transition="0.2s ease-out"
                    _hover={{
                      transform: 'scale(1.02)',
                      borderWidth: '3px',
                      borderColor: colorMode === 'light' ? 'blue.500' : 'blue.200',
                    }}>
                    <Image
                      src={project.preview}
                      alt={`${project.name}'s preview`}
                      height="full"
                      objectFit="cover"
                    />
                    <VStack
                      position="absolute"
                      justifyContent="end"
                      alignItems="start"
                      bottom={0}
                      padding={4}
                      width="full"
                      height="full"
                      background="linear-gradient(360deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0) 100%)">
                      <HStack position="absolute" spacing={3}>
                        <Image src={project.logo} alt={`${project.name}'s logo`} width={8} />
                        <Text color="white" fontWeight={600}>
                          {project.name}
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                </ChakraLink>
              </motion.div>
            ))}
        </SimpleGrid>

        <Button
          colorScheme="blue"
          variant="outline"
          borderRadius="full"
          width="full"
          onClick={() => router.replace('/projects')}>
          View all projects
        </Button>
      </motion.div>
    </Box>
  );
};

export default FeaturedProjects;

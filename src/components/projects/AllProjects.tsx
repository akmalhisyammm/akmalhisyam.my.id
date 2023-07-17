import { useContext } from 'react';
import {
  Box,
  Heading,
  HStack,
  Image,
  Link as ChakraLink,
  Text,
  Tooltip,
  Icon,
  useColorMode,
  Badge,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { ProjectContext } from '@/contexts/project';

const AllProjects = () => {
  const projectsCtx = useContext(ProjectContext);
  const { colorMode } = useColorMode();

  return (
    <Box marginBottom={8}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut' }}>
        <Heading as="h1">Projects</Heading>
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
                <ChakraLink href={project.link} _hover={{ textDecoration: 'none' }} isExternal>
                  <HStack
                    spacing={6}
                    borderWidth={2}
                    borderRadius={18}
                    padding={8}
                    marginY={4}
                    cursor="pointer"
                    transition="0.2s ease-out"
                    _hover={{
                      transform: 'scale(1.01)',
                      borderWidth: '3px',
                      borderColor: colorMode === 'light' ? 'blue.500' : 'blue.200',
                    }}>
                    <Image src={project.logo} alt={`${project.name}'s logo`} width={70} />

                    <Box flexGrow={1}>
                      <Text fontWeight={600}>{project.name}</Text>
                      <Text as="small" color={colorMode === 'light' ? 'gray.500' : 'gray.400'}>
                        {project.description}
                      </Text>
                      <HStack marginTop={2}>
                        {project.techStacks.map((ts, idx) => (
                          <Tooltip key={idx} label={ts.name}>
                            <span>
                              <Icon as={ts.icon} fontSize={24} />
                            </span>
                          </Tooltip>
                        ))}
                      </HStack>
                      <Badge
                        colorScheme={project.type === 'Personal' ? 'green' : 'red'}
                        variant={colorMode === 'light' ? 'subtle' : 'outline'}
                        marginTop={1}>
                        {project.type}
                      </Badge>
                    </Box>

                    <Icon as={FaChevronRight} color="gray.400" />
                  </HStack>
                </ChakraLink>
              </motion.div>
            ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default AllProjects;

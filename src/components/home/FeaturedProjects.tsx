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
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { ProjectContext } from 'contexts/project';

const FeaturedProjects = () => {
  const router = useRouter();
  const projectsCtx = useContext(ProjectContext);
  const { colorMode } = useColorMode();

  return (
    <Box marginY={8}>
      <Heading as="h3" fontSize={24}>
        Featured Projects
      </Heading>

      <SimpleGrid columns={[1, 2, 2]} gap={6} marginY={4}>
        {projectsCtx.projects.slice(0, 4).map((project) => (
          <ChakraLink key={project.id} href={project.link} isExternal>
            <Box
              borderRadius={18}
              overflow="hidden"
              position="relative"
              borderWidth={2}
              height={200}
              cursor="pointer"
              transition="0.2s ease-out"
              _hover={{
                transform: 'scale(1.04)',
                borderWidth: '3px',
                borderColor: colorMode === 'light' ? 'blue.500' : 'blue.200',
              }}>
              <Image
                src={project.preview_path}
                alt={project.name + ' Preview'}
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
                  <Image src={project.icon_path} alt={project.name + ' Icon'} width={8} />
                  <Text color="white" fontWeight={600}>
                    {project.name}
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </ChakraLink>
        ))}
      </SimpleGrid>

      <Button
        colorScheme="blue"
        variant="outline"
        borderRadius="full"
        isFullWidth
        onClick={() => router.replace('/projects')}>
        View all projects
      </Button>
    </Box>
  );
};

export default FeaturedProjects;

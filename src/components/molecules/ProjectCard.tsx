import { useRef } from 'react';
import { Box, HStack, Text, VStack, useColorMode } from '@chakra-ui/react';

import { ChakraImage, ChakraLink } from '@/components/atoms';

type ProjectCardProps = {
  href: string;
  name: string;
  previewSrc: string;
  logoSrc: string;
};

const ProjectCard = ({ href, name, previewSrc, logoSrc }: ProjectCardProps) => {
  const { colorMode } = useColorMode();

  const previewRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  return (
    <ChakraLink href={href}>
      <Box
        borderRadius={18}
        overflow="hidden"
        position="relative"
        borderWidth={2}
        height={[200, 200, 250]}
        cursor="pointer"
        transition="0.2s ease-out"
        _hover={{
          transform: 'scale(1.02)',
          borderWidth: '3px',
          borderColor: colorMode === 'light' ? 'blue.500' : 'blue.200',
        }}>
        <ChakraImage
          ref={previewRef}
          src={previewSrc}
          alt={`${name}'s preview`}
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
            <ChakraImage ref={logoRef} src={logoSrc} alt={`${name}'s logo`} width={8} />
            <Text color="white" fontWeight={600}>
              {name}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </ChakraLink>
  );
};

export default ProjectCard;

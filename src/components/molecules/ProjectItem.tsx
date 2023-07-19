import { useRef } from 'react';
import { Box, HStack, Text, Tooltip, Icon, useColorMode, Badge } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaChevronRight } from 'react-icons/fa';

import { ChakraImage, ChakraLink } from '@/components/atoms';

import type { ILocale, ITechStack } from '@/types/globals';

type ProjectItemProps = {
  href: string;
  name: string;
  description: ILocale;
  techStacks: ITechStack[];
  type: ILocale;
  logoSrc: string;
};

const ProjectItem = ({ href, name, description, techStacks, type, logoSrc }: ProjectItemProps) => {
  const { colorMode } = useColorMode();

  const router = useRouter();

  const logoRef = useRef<HTMLImageElement>(null);

  const currentLocale = router.locale as 'en' | 'id';

  return (
    <ChakraLink href={href} _hover={{ textDecoration: 'none' }}>
      <HStack
        spacing={6}
        borderWidth={2}
        borderColor={colorMode === 'light' ? 'gray.400' : 'gray.500'}
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
        <ChakraImage ref={logoRef} src={logoSrc} alt={`${name}'s logo`} width={70} />

        <Box flexGrow={1}>
          <Text fontWeight={600}>{name}</Text>
          <Text as="small" color={colorMode === 'light' ? 'gray.500' : 'gray.400'}>
            {description[currentLocale]}
          </Text>
          <HStack marginTop={2}>
            {techStacks.map((ts, idx) => (
              <Tooltip key={idx} label={ts.name}>
                <span>
                  <Icon as={ts.icon} fontSize={24} />
                </span>
              </Tooltip>
            ))}
          </HStack>
          <Badge
            colorScheme={type.en === 'Personal' ? 'green' : 'red'}
            variant="outline"
            marginTop={1}>
            {type[currentLocale]}
          </Badge>
        </Box>

        <Icon as={FaChevronRight} color="gray.400" />
      </HStack>
    </ChakraLink>
  );
};

export default ProjectItem;

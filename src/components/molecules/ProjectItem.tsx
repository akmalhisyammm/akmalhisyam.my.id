'use client';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  HStack,
  Text,
  Tooltip,
  Icon,
  useColorMode,
  Badge,
  VStack,
} from '@chakra-ui/react';

import { ChakraImage, ExternalLink } from '@/components/atoms';

import type { Locale, TechStack } from '@/types/globals';

type ProjectItemProps = {
  href: string;
  name: string;
  description: Locale;
  techStacks: TechStack[];
  type: Locale;
  logoSrc: string;
};

const ProjectItem = ({
  href,
  name,
  description,
  techStacks,
  type,
  logoSrc,
}: ProjectItemProps) => {
  const { colorMode } = useColorMode();
  const { i18n } = useTranslation('projects');

  const logoRef = useRef<HTMLImageElement>(null);
  const locale = i18n.language as keyof Locale;

  return (
    <ExternalLink href={href}>
      <HStack
        spacing={6}
        borderWidth={2}
        borderColor={colorMode === 'light' ? 'gray.400' : 'gray.500'}
        borderRadius={18}
        padding={8}
        cursor="pointer"
        height="full"
        transition="0.2s ease-out"
        _hover={{
          borderWidth: 2,
          borderColor: colorMode === 'light' ? 'blue.500' : 'blue.200',
          color: colorMode === 'light' ? 'blue.500' : 'blue.200',
          backgroundColor: colorMode === 'light' ? 'gray.50' : 'gray.800',
        }}>
        <ChakraImage
          ref={logoRef}
          src={logoSrc}
          alt={`${name}'s logo`}
          width={70}
        />

        <VStack justifyContent="space-between" alignItems="start" height="full">
          <Box>
            <Text fontSize="large" fontWeight={600}>
              {name}
            </Text>
            <Text
              as="small"
              color={colorMode === 'light' ? 'gray.500' : 'gray.400'}>
              {description[locale]}
            </Text>
          </Box>
          <Box>
            <HStack marginTop={2} spacing={3}>
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
              {type[locale]}
            </Badge>
          </Box>
        </VStack>
      </HStack>
    </ExternalLink>
  );
};

export default ProjectItem;

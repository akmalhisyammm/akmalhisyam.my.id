'use client';

import { useContext } from 'react';
import { Box, HStack, Icon, Text, useColorMode } from '@chakra-ui/react';

import { AboutContext } from '@/contexts/about';
import { ExternalLink, RouteLink } from '@/components/atoms';

const Footer = () => {
  const { colorMode } = useColorMode();
  const { about } = useContext(AboutContext);

  return (
    <Box
      as="footer"
      position="relative"
      width="full"
      textAlign="center"
      borderTopWidth={1}
      borderColor={colorMode === 'light' ? 'gray.400' : 'gray.500'}
      paddingY={4}>
      <HStack justifyContent="center">
        {about.socials.map((social) => (
          <ExternalLink
            key={social.name}
            href={social.link}
            paddingX={2.5}
            paddingY={2}>
            <Icon
              as={social.icon}
              fontSize={24}
              _hover={{
                color: colorMode === 'light' ? 'blue.500' : 'blue.200',
              }}
            />
          </ExternalLink>
        ))}
      </HStack>

      <Text>
        {new Date().getFullYear()} &bull;{' '}
        <RouteLink href="/about" paddingY={3}>
          Muhammad Akmal Hisyam
        </RouteLink>
      </Text>
    </Box>
  );
};

export default Footer;

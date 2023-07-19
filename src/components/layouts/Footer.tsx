import { useContext } from 'react';
import { Box, HStack, Icon, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

import { AboutContext } from '@/contexts/about';
import { ChakraLink } from '@/components/atoms';

const Footer = () => {
  const { colorMode } = useColorMode();

  const aboutCtx = useContext(AboutContext);

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
        {aboutCtx.about.socials.map((social) => (
          <ChakraLink key={social.name} href={social.link} paddingX={2.5} paddingY={2}>
            <Icon
              as={social.icon}
              fontSize={24}
              _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}
            />
          </ChakraLink>
        ))}
      </HStack>

      <Text>
        {new Date().getFullYear()} &bull;{' '}
        <Link href="/about" passHref>
          <Text
            as="span"
            cursor="pointer"
            paddingY={3}
            _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}>
            Muhammad Akmal Hisyam
          </Text>
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;

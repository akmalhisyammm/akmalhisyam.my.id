import { Box, Flex, HStack, Link as ChakraLink, Text, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <Box
      as="header"
      width="full"
      height={70}
      backgroundColor={colorMode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(23, 25, 35, 0.8)'}
      backdropFilter="blur(10px)"
      position="fixed"
      zIndex={5}>
      <Flex as="nav" maxWidth={800} height="full" margin="0 auto" alignItems="center" padding={4}>
        <HStack spacing={[4, 8, 8]}>
          <Link href="/" legacyBehavior passHref>
            {router.pathname === '/' ? (
              <ChakraLink
                color={colorMode === 'light' ? 'blue.500' : 'blue.200'}
                _hover={{ textDecoration: 'none' }}>
                <Text>Home</Text>
              </ChakraLink>
            ) : (
              <ChakraLink _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}>
                <Text>Home</Text>
              </ChakraLink>
            )}
          </Link>
          <Link href="/projects" legacyBehavior passHref>
            {router.pathname === '/projects' ? (
              <ChakraLink
                color={colorMode === 'light' ? 'blue.500' : 'blue.200'}
                _hover={{ textDecoration: 'none' }}>
                <Text>Projects</Text>
              </ChakraLink>
            ) : (
              <ChakraLink _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}>
                <Text>Projects</Text>
              </ChakraLink>
            )}
          </Link>
          <Link href="/about" legacyBehavior passHref>
            {router.pathname === '/about' ? (
              <ChakraLink
                color={colorMode === 'light' ? 'blue.500' : 'blue.200'}
                _hover={{ textDecoration: 'none' }}>
                <Text>About</Text>
              </ChakraLink>
            ) : (
              <ChakraLink _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}>
                <Text>About</Text>
              </ChakraLink>
            )}
          </Link>
        </HStack>

        <Box marginLeft="auto">
          <ThemeToggle />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

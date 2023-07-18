import { Box, Flex, HStack, Text, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <Box
      as="header"
      width="full"
      height={70}
      backgroundColor={colorMode === 'light' ? 'rgba(237, 242, 247, 0.8)' : 'rgba(23, 25, 35, 0.8)'}
      backdropFilter="blur(10px)"
      position="fixed"
      zIndex={5}>
      <Flex as="nav" maxWidth={800} height="full" margin="0 auto" alignItems="center" padding={4}>
        <HStack spacing={[2, 4, 4]}>
          <Link href="/" legacyBehavior passHref>
            {router.pathname === '/' ? (
              <Text
                padding={3}
                cursor="pointer"
                color={colorMode === 'light' ? 'blue.500' : 'blue.200'}>
                Home
              </Text>
            ) : (
              <Text
                padding={3}
                cursor="pointer"
                _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}>
                Home
              </Text>
            )}
          </Link>
          <Link href="/projects" legacyBehavior passHref>
            {router.pathname === '/projects' ? (
              <Text
                padding={3}
                cursor="pointer"
                color={colorMode === 'light' ? 'blue.500' : 'blue.200'}>
                Projects
              </Text>
            ) : (
              <Text
                padding={3}
                cursor="pointer"
                _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}>
                Projects
              </Text>
            )}
          </Link>
          <Link href="/about" legacyBehavior passHref>
            {router.pathname === '/about' ? (
              <Text
                padding={3}
                cursor="pointer"
                color={colorMode === 'light' ? 'blue.500' : 'blue.200'}>
                About
              </Text>
            ) : (
              <Text
                padding={3}
                cursor="pointer"
                _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}>
                About
              </Text>
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

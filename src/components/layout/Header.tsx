import { Box, Flex, HStack, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Box
      as="header"
      width="full"
      height={70}
      backdropFilter="blur(10px)"
      position="fixed"
      zIndex={5}>
      <Flex as="nav" maxWidth={800} height="full" margin="0 auto" alignItems="center" padding={4}>
        <HStack spacing={4}>
          <Link href="/" passHref>
            <ChakraLink>
              <Text>Home</Text>
            </ChakraLink>
          </Link>
          <Link href="/project" passHref>
            <ChakraLink>
              <Text>Project</Text>
            </ChakraLink>
          </Link>
          <Link href="/about" passHref>
            <ChakraLink>
              <Text>About</Text>
            </ChakraLink>
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

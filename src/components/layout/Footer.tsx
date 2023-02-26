import {
  Box,
  HStack,
  Icon,
  Link as ChakraLink,
  Text,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { useContext } from 'react';
import Link from 'next/link';

import { AboutContext } from 'contexts/about';

const Footer = () => {
  const aboutCtx = useContext(AboutContext);
  const { colorMode } = useColorMode();

  return (
    <Box
      as="footer"
      position="relative"
      width="full"
      textAlign="center"
      borderTopWidth={1}
      paddingY={4}>
      <HStack justifyContent="center" spacing={3}>
        {aboutCtx.about.social_media.map((sm) => (
          <Tooltip key={sm.name} label={sm.name}>
            <ChakraLink href={sm.link} isExternal>
              <Icon
                as={sm.icon}
                fontSize={18}
                _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}
              />
            </ChakraLink>
          </Tooltip>
        ))}
      </HStack>

      <Text>
        {new Date().getFullYear()} &bull;{' '}
        <Link href="/about" legacyBehavior passHref>
          <ChakraLink _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}>
            Muhammad Akmal Hisyam
          </ChakraLink>
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;

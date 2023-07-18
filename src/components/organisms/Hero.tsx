import { useContext } from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaChevronRight } from 'react-icons/fa';
import { RiArticleLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

import { AboutContext } from '@/contexts/about';
import { ChakraHeading, ChakraLink, NextImage } from '@/components/atoms';

const Hero = () => {
  const router = useRouter();

  const aboutCtx = useContext(AboutContext);

  return (
    <Box>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut' }}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          flexDirection={['column-reverse', 'column-reverse', 'row']}
          marginBottom={8}
          spacing={[0, 0, 4]}>
          <Box textAlign={['center', 'center', 'left']} marginTop={[4, 4, 0]}>
            <ChakraHeading as="h2" size="2xl" marginBottom={1}>
              Hello, I&apos;m Akmal.
            </ChakraHeading>
            <Text>{aboutCtx.about.headline}</Text>
            <HStack marginY={4} justifyContent={['center', 'center', 'start']}>
              <ChakraLink href={aboutCtx.about.resume} _hover={{ textDecoration: 'none' }}>
                <Button colorScheme="blue" borderRadius="full" leftIcon={<RiArticleLine />}>
                  Resume
                </Button>
              </ChakraLink>
              <Button
                colorScheme="blue"
                variant="outline"
                borderRadius="full"
                rightIcon={<FaChevronRight />}
                onClick={() => router.replace('/about')}>
                Learn about me
              </Button>
            </HStack>
          </Box>

          <Box as="figure">
            <NextImage
              src={aboutCtx.about.avatar}
              alt="Akmal Hisyam's avatar"
              width={250}
              height={250}
            />
          </Box>
        </HStack>
      </motion.div>
    </Box>
  );
};

export default Hero;

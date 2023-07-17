import { useContext } from 'react';
import { Box, Button, Heading, HStack, Image, Link as ChakraLink, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaChevronRight } from 'react-icons/fa';
import { RiArticleLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

import { AboutContext } from '@/contexts/about';

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
          marginBottom={8}>
          <Box
            textAlign={['center', 'center', 'left']}
            marginTop={[4, 4, 0]}
            marginRight={[0, 0, 4]}>
            <Heading as="h1" marginBottom={1}>
              Hi! I&apos;m Akmal.
            </Heading>
            <Text>{aboutCtx.about.headline}</Text>
            <HStack marginY={4} justifyContent={['center', 'center', 'start']}>
              <ChakraLink
                href={aboutCtx.about.resume}
                _hover={{ textDecoration: 'none' }}
                isExternal>
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

          <Image src={aboutCtx.about.avatar} alt="Akmal Hisyam's avatar" width={250} />
        </HStack>
      </motion.div>
    </Box>
  );
};

export default Hero;

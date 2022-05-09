import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const router = useRouter();

  return (
    <Box>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut' }}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          flexDirection={['column-reverse', 'row', 'row']}
          marginBottom={8}>
          <Box textAlign={['center', 'left', 'left']} marginTop={[4, 0, 0]} marginRight={[0, 4, 4]}>
            <Heading as="h1" marginBottom={1}>
              Hi! I&apos;m Akmal.
            </Heading>
            <Text>Informatics student at Multimedia Nusantara University.</Text>
            <Button
              colorScheme="blue"
              borderRadius="full"
              marginY={4}
              rightIcon={<FaChevronRight />}
              onClick={() => router.replace('/about')}>
              Learn about me
            </Button>
          </Box>

          <Image src="/avatar.png" alt="akmalhisyam.my.id avatar" width={250} />
        </HStack>
      </motion.div>
    </Box>
  );
};

export default Hero;

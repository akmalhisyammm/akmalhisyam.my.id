import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const router = useRouter();

  return (
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

      <Image src="/avatar.png" alt="avatar" width={250} />
    </HStack>
  );
};

export default Hero;

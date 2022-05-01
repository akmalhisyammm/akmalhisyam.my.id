import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection={['column-reverse', 'row', 'row']}
      marginBottom={8}>
      <Box textAlign={['center', 'left', 'left']} marginRight={[0, 4, 4]}>
        <Heading as="h1" marginBottom={1}>
          Hi! I&apos;m Akmal.
        </Heading>
        <Text>Informatics student at Multimedia Nusantara University.</Text>
        <Button colorScheme="blue" borderRadius="full" marginY={4} rightIcon={<FaChevronRight />}>
          Learn about me
        </Button>
      </Box>

      <Image src="/avatar.png" alt="avatar" width={250} marginBottom={[8, 0, 0]} />
    </Flex>
  );
};

export default Hero;

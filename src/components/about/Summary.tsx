import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { AboutContext } from 'contexts/about';

const Summary = () => {
  const aboutCtx = useContext(AboutContext);

  return (
    <Box marginBottom={4}>
      <Heading as="h1" marginBottom={4}>
        About
      </Heading>

      <HStack
        flexDirection={['column-reverse', 'row', 'row']}
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={[0, 4, 4]}>
        <Box marginY={[4, 0, 0]}>
          <Text marginBottom={4}>{aboutCtx.about.summary.paragraph_1}</Text>
          <Text>{aboutCtx.about.summary.paragraph_2}</Text>
        </Box>
        <Image
          src={aboutCtx.about.photo}
          alt="My Photo"
          width={['full', 250, 250]}
          borderRadius={24}
        />
      </HStack>
    </Box>
  );
};

export default Summary;

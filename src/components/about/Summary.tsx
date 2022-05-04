import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { AboutContext } from 'contexts/about';

const Summary = () => {
  const aboutCtx = useContext(AboutContext);

  return (
    <Box marginBottom={4}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut' }}>
        <Heading as="h1" marginBottom={4}>
          About
        </Heading>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', delay: 0.2 }}>
        <HStack
          flexDirection={['column-reverse', 'row', 'row']}
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={[0, 4, 4]}>
          <Box marginY={[4, 0, 0]}>
            {aboutCtx.about.summary.map((summary, idx) => (
              <Text key={idx} marginBottom={2}>
                {summary}
              </Text>
            ))}
          </Box>
          <Image
            src={aboutCtx.about.photo}
            alt="My Photo"
            width={['full', 250, 250]}
            borderRadius={24}
          />
        </HStack>
      </motion.div>
    </Box>
  );
};

export default Summary;

import { useContext } from 'react';
import { Box, HStack, Icon, Text, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { AboutContext } from '@/contexts/about';
import { ChakraHeading, NextImage } from '@/components/atoms';

const AboutContent = () => {
  const aboutCtx = useContext(AboutContext);

  return (
    <Box>
      <Box marginBottom={4}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut' }}>
          <ChakraHeading as="h2">About Me</ChakraHeading>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', delay: 0.2 }}>
          <HStack
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            justifyContent="space-between"
            alignItems="flex-start"
            marginY={6}
            spacing={[0, 0, 4]}>
            <Box marginY={[4, 4, 0]}>
              {aboutCtx.about.summaries.map((summary, idx) => (
                <Text key={idx} marginBottom={3}>
                  {summary}
                </Text>
              ))}
            </Box>
            <Box as="figure" width="full">
              <NextImage
                src={aboutCtx.about.photo}
                alt="Akmal Hisyam's photo"
                width={250}
                height={250}
              />
            </Box>
          </HStack>
        </motion.div>
      </Box>

      <Box marginBottom={8}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', delay: 0.4 }}>
          <ChakraHeading as="h3" size="lg">
            Current Favorite Tech Stack
          </ChakraHeading>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.6,
              },
            },
          }}
          initial="hidden"
          animate="show">
          <HStack marginTop={2} spacing={4}>
            {aboutCtx.about.favoriteTechStacks.map((fts, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
                }}>
                <Tooltip label={fts.name} closeOnClick={false}>
                  <span>
                    <Icon as={fts.icon} fontSize={36} />
                  </span>
                </Tooltip>
              </motion.div>
            ))}
          </HStack>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutContent;

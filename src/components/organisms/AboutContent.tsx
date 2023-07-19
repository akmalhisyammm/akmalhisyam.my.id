import { useContext } from 'react';
import { Box, HStack, Icon, Text, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import { AboutContext } from '@/contexts/about';
import { ChakraHeading, NextImage } from '@/components/atoms';

const AboutContent = () => {
  const { t } = useTranslation('about');

  const router = useRouter();

  const aboutCtx = useContext(AboutContext);

  const currentLocale = router.locale as 'en' | 'id';

  return (
    <Box>
      <Box marginBottom={4}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut' }}>
          <ChakraHeading as="h2" size="2xl" paddingBottom={2}>
            {t('title')}
          </ChakraHeading>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', delay: 0.2 }}>
          <HStack
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            justifyContent="space-between"
            alignItems="flex-start"
            marginY={4}
            spacing={4}>
            <Box>
              {(aboutCtx.about.summary[currentLocale] as string[]).map((summary, idx) => (
                <Text key={idx} marginBottom={3}>
                  {summary}
                </Text>
              ))}
            </Box>
            <Box
              as="figure"
              position="relative"
              width={[250, 250, 200]}
              height={[250, 250, 200]}
              borderRadius={24}
              flex="0 0 auto"
              boxShadow="base"
              marginX="auto">
              <NextImage src={aboutCtx.about.photo} alt="Akmal Hisyam's photo" fill />
            </Box>
          </HStack>
        </motion.div>
      </Box>

      <Box marginBottom={8}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', delay: 0.4 }}>
          <ChakraHeading as="h3" size="lg" paddingBottom={1}>
            {t('favoriteTS.title')}
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

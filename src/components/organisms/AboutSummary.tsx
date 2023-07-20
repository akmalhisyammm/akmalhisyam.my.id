import { useContext } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import { AboutContext } from '@/contexts/about';
import { ChakraHeading, NextImage } from '@/components/atoms';

const AboutSummary = () => {
  const { t } = useTranslation('about');

  const router = useRouter();

  const aboutCtx = useContext(AboutContext);

  const currentLocale = (router.locale as 'en' | 'id' | undefined) ?? 'en';

  return (
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
          spacing={6}>
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
  );
};

export default AboutSummary;

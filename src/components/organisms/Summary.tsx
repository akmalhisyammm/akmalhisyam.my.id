'use client';

import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Box, HStack, Text } from '@chakra-ui/react';

import { AboutContext } from '@/contexts/about';
import { BrandHeading, NextImage } from '@/components/atoms';

import type { Locale } from '@/types/globals';

const Summary = () => {
  const { about } = useContext(AboutContext);
  const { i18n, t } = useTranslation('about');

  const locale = i18n.language as keyof Locale;

  return (
    <Box marginBottom={4}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut' }}>
        <BrandHeading as="h2" size="2xl" paddingBottom={2}>
          {t('title')}
        </BrandHeading>
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
            {(about.summary[locale] as string[]).map((summary, idx) => (
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
            <NextImage src={about.photo} alt="Akmal Hisyam's photo" fill />
          </Box>
        </HStack>
      </motion.div>
    </Box>
  );
};

export default Summary;

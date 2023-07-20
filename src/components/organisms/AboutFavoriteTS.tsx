import { useContext } from 'react';
import { Box, HStack, Tooltip, Icon } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import { AboutContext } from '@/contexts/about';
import { ChakraHeading } from '@/components/atoms';

const AboutFavoriteTS = () => {
  const { t } = useTranslation('about');

  const aboutCtx = useContext(AboutContext);

  return (
    <Box marginBottom={4}>
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
  );
};

export default AboutFavoriteTS;

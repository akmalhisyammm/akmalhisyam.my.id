import { useContext } from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { RiArticleLine } from 'react-icons/ri';

import { AboutContext } from '@/contexts/about';
import { ChakraHeading, ChakraLink, NextImage } from '@/components/atoms';

const Hero = () => {
  const { t } = useTranslation('home');

  const router = useRouter();

  const aboutCtx = useContext(AboutContext);

  return (
    <Box>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut' }}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          flexDirection={['column-reverse', 'column-reverse', 'row']}
          marginBottom={8}
          spacing={[0, 0, 4]}>
          <Box textAlign={['center', 'center', 'left']} marginTop={[4, 4, 0]}>
            <ChakraHeading as="h2" size="2xl" paddingY={2}>
              {t('hero.greeting', { nickname: aboutCtx.about.nickname })}
            </ChakraHeading>
            <Text> {t('hero.headline', { occupation: aboutCtx.about.occupation })}</Text>
            <HStack marginY={4} justifyContent={['center', 'center', 'start']}>
              <ChakraLink href={aboutCtx.about.resume} _hover={{ textDecoration: 'none' }}>
                <Button colorScheme="blue" borderRadius="full" leftIcon={<RiArticleLine />}>
                  {t('hero.cta.resume')}
                </Button>
              </ChakraLink>
              <Button
                colorScheme="blue"
                variant="outline"
                borderRadius="full"
                rightIcon={<FaChevronRight />}
                onClick={() => router.push('/about')}>
                {t('hero.cta.about')}
              </Button>
            </HStack>
          </Box>

          <Box as="figure" width={250} height={250} position="relative">
            <NextImage src={aboutCtx.about.avatar} alt="Akmal Hisyam's avatar" fill />
          </Box>
        </HStack>
      </motion.div>
    </Box>
  );
};

export default Hero;

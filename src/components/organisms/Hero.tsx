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
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut' }}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        flexDirection={['column-reverse', 'column-reverse', 'row']}
        marginBottom={[8, 8, 12]}
        spacing={[0, 0, 4]}>
        <Box textAlign={['center', 'center', 'left']} marginTop={[4, 4, 0]}>
          <ChakraHeading as="h1" size={['2xl', '3xl', '3xl']} paddingY={[2, 2, 3]}>
            {t('hero.greeting', { nickname: aboutCtx.about.nickname })}
          </ChakraHeading>
          <Text fontSize={['md', 'xl', 'xl']}>
            {t('hero.headline', { occupation: aboutCtx.about.occupation })}
          </Text>
          <HStack marginY={4} justifyContent={['center', 'center', 'start']}>
            <ChakraLink href={aboutCtx.about.resume} _hover={{ textDecoration: 'none' }}>
              <Button
                colorScheme="blue"
                size={['md', 'lg', 'lg']}
                borderRadius="full"
                leftIcon={<RiArticleLine />}>
                {t('hero.cta.resume')}
              </Button>
            </ChakraLink>
            <Button
              colorScheme="blue"
              variant="outline"
              size={['md', 'lg', 'lg']}
              borderRadius="full"
              rightIcon={<FaChevronRight />}
              onClick={() => router.push('/about')}>
              {t('hero.cta.about')}
            </Button>
          </HStack>
        </Box>

        <Box
          as="figure"
          position="relative"
          width={[250, 250, 300]}
          height={[250, 250, 300]}
          flex="0 0 auto">
          <NextImage src={aboutCtx.about.avatar} alt="Akmal Hisyam's avatar" fill />
        </Box>
      </HStack>
    </motion.div>
  );
};

export default Hero;

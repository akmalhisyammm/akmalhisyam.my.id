'use client';

import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { RiArticleLine } from 'react-icons/ri';
import { Box, Button, HStack, Text } from '@chakra-ui/react';

import { AboutContext } from '@/contexts/about';
import {
  BrandHeading,
  ExternalLink,
  NextImage,
  RouteLink,
} from '@/components/atoms';

const Hero = () => {
  const { about } = useContext(AboutContext);
  const { t } = useTranslation('home');

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
          <BrandHeading
            as="h1"
            size={['2xl', '3xl', '3xl']}
            paddingY={[2, 2, 3]}>
            {t('hero.greeting', { nickname: about.nickname })}
          </BrandHeading>
          <Text fontSize={['md', 'xl', 'xl']}>
            {t('hero.headline', { occupation: about.occupation })}
          </Text>
          <HStack marginY={4} justifyContent={['center', 'center', 'start']}>
            <ExternalLink href={about.resume}>
              <Button
                colorScheme="blue"
                size="lg"
                borderRadius="full"
                leftIcon={<RiArticleLine />}>
                {t('hero.cta.resume')}
              </Button>
            </ExternalLink>
            <RouteLink href="/about">
              <Button
                colorScheme="blue"
                variant="outline"
                size="lg"
                borderRadius="full"
                rightIcon={<FaChevronRight />}>
                {t('hero.cta.about')}
              </Button>
            </RouteLink>
          </HStack>
        </Box>

        <Box
          as="figure"
          position="relative"
          width={[250, 250, 300]}
          height={[250, 250, 300]}
          flex="0 0 auto">
          <NextImage src={about.avatar} alt="Akmal Hisyam's avatar" fill />
        </Box>
      </HStack>
    </motion.div>
  );
};

export default Hero;

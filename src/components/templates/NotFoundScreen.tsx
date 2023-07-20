import { Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FaHome } from 'react-icons/fa';

import { ChakraHeading } from '@/components/atoms';

const NotFoundScreen = () => {
  const { t } = useTranslation('404');

  const router = useRouter();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      height="100vh"
      gap={2}
      padding={4}>
      <ChakraHeading as="h2" size={['xl', '2xl']} padding={[0, 2]}>
        404 | {t('title')}
      </ChakraHeading>
      <Text>{t('content.description')}</Text>
      <Button
        colorScheme="blue"
        borderRadius="full"
        marginY={4}
        leftIcon={<FaHome />}
        onClick={() => router.replace('/')}>
        {t('content.cta')}
      </Button>
    </Flex>
  );
};

export default NotFoundScreen;

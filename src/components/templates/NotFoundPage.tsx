import { FaHome } from 'react-icons/fa';
import { Button, Flex, Text } from '@chakra-ui/react';

import { BrandHeading, RouteLink } from '@/components/atoms';

const NotFoundPage = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      height="100vh"
      gap={2}
      padding={4}>
      <BrandHeading as="h2" size="2xl" padding={[0, 2]}>
        404 | Not Found
      </BrandHeading>
      <Text>Seems like you are lost.</Text>
      <RouteLink href="/" marginY={8}>
        <Button
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          leftIcon={<FaHome />}>
          Back to Home
        </Button>
      </RouteLink>
    </Flex>
  );
};

export default NotFoundPage;

import { Box, useColorMode } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      minHeight="100vh"
      paddingBottom={100}
      transition="0.5s ease-out"
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.900'}>
      <Meta title={title} />
      <Header />

      <Box maxWidth={800} margin="0 auto" position="relative" top={70} padding={4}>
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;

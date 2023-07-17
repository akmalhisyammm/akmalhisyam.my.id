import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { AboutProvider } from '@/contexts/about';
import { ProjectProvider } from '@/contexts/project';
import customTheme from '@/styles/customTheme';

import defaultSEOConfig from '../../next-seo.config';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <DefaultSeo {...defaultSEOConfig} />

      <AboutProvider>
        <ProjectProvider>
          <Component {...pageProps} />
        </ProjectProvider>
      </AboutProvider>
    </ChakraProvider>
  );
};

export default MyApp;

import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { appWithTranslation } from 'next-i18next';

import { AboutProvider } from '@/contexts/about';
import { ProjectProvider } from '@/contexts/project';
import customTheme from '@/styles/customTheme';

import defaultSEOConfig from '../../next-seo.config';

import type { AppProps } from 'next/app';

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

export default appWithTranslation(MyApp);

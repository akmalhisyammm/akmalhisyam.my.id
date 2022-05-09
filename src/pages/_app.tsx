import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { AboutProvider } from 'contexts/about';
import { ProjectProvider } from 'contexts/project';

import '@fontsource/open-sans';
import customTheme from 'styles/customTheme';

import defaultSEOConfig from '../../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <DefaultSeo {...defaultSEOConfig} />

      <AboutProvider>
        <ProjectProvider>
          <Component {...pageProps} />
        </ProjectProvider>
      </AboutProvider>
    </ChakraProvider>
  );
}

export default MyApp;

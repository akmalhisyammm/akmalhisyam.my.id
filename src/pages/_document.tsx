import Document, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from 'next/document';

import { UMAMI_WEBSITE_ID, UMAMI_WEBSITE_URL } from '@/constants/analytics';

import i18nextConfig from '../../next-i18next.config';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={i18nextConfig.i18n.defaultLocale}>
        <Head>
          <link rel="manifest" href="manifest.json" />
          <meta name="application-name" content="Akmal Hisyam" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Akmal Hisyam" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <script
            async
            defer
            data-website-id={UMAMI_WEBSITE_ID}
            src={UMAMI_WEBSITE_URL}
            data-cache="true"
            data-domains="akmalhisyam.my.id"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

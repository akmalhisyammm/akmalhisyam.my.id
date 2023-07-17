/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: undefined,
  titleTemplate: '%s | Akmal Hisyam',
  defaultTitle: 'Akmal Hisyam',
  description: "Akmal Hisyam's personal site",
  canonical: 'https://akmalhisyam.my.id',
  openGraph: {
    url: 'https://akmalhisyam.my.id',
    title: 'Akmal Hisyam',
    description: "Akmal Hisyam's personal site",
    images: [
      {
        url: 'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/about/og-image.png',
        alt: "Akmal Hisyam's og image",
      },
    ],
    site_name: 'akmalhisyam.my.id',
  },
  twitter: {
    handle: '@akmalhisyammm',
    cardType: 'summary_large_image',
  },
};

module.exports = defaultSEOConfig;

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: undefined,
  titleTemplate: '%s | Akmal Hisyam',
  defaultTitle: 'Akmal Hisyam',
  description: "Muhammad Akmal Hisyam's personal site",
  canonical: 'https://akmalhisyam.my.id',
  openGraph: {
    url: 'https://akmalhisyam.my.id',
    title: 'Akmal Hisyam',
    description: "Muhammad Akmal Hisyam's personal site",
    images: [
      {
        url: '/og-image.png',
        alt: 'akmalhisyam.my.id og-image',
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

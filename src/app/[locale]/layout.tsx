import { dir } from 'i18next';
import { Open_Sans } from 'next/font/google';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';

import { Providers } from '@/app/providers';
import { UMAMI_WEBSITE_ID, UMAMI_WEBSITE_URL } from '@/constants/analytics';
import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/constants/meta';
import i18nConfig from '../../../i18n.config.mjs';

import type { Metadata, Viewport } from 'next';

type RootLayoutProps = {
	children: React.ReactNode;
	params: { locale: string };
};

const font = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

export const metadata: Metadata = {
	title: { default: APP_NAME, template: `%s | ${APP_NAME}` },
	description: APP_DESCRIPTION,
	robots: { index: true, follow: true },
	manifest: '/manifest.json',
	metadataBase: new URL(APP_URL),
	openGraph: {
		title: APP_NAME,
		description: APP_DESCRIPTION,
		url: APP_URL,
		images: {
			url: 'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/about/og-image.png',
			alt: "Akmal Hisyam's og-image",
		},
		siteName: APP_NAME,
		type: 'website',
	},
	twitter: {
		title: APP_NAME,
		description: APP_DESCRIPTION,
		card: 'summary_large_image',
		creator: '@akmalhisyammm',
	},
	authors: {
		name: 'Muhammad Akmal Hisyam',
		url: APP_URL,
	},
	keywords: ['Muhammad Akmal Hisyam', 'Akmal Hisyam', 'akmalhisyam'],
	creator: 'Muhammad Akmal Hisyam',
	publisher: 'Muhammad Akmal Hisyam',
	generator: 'Next.js',
};

export const viewport: Viewport = {
	colorScheme: 'light dark',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#EDF2F7' },
		{ media: '(prefers-color-scheme: dark)', color: '#171923' },
	],
};

export const generateStaticParams = () => {
	return i18nConfig.locales.map((locale) => ({ locale }));
};

const RootLayout = ({ children, params: { locale } }: RootLayoutProps) => {
	return (
		<html lang={locale} dir={dir(locale)}>
			<body className={font.variable}>
				<NextTopLoader color="#3182CE" showSpinner={false} />
				<Providers>{children}</Providers>
				<Script
					src={UMAMI_WEBSITE_URL}
					data-website-id={UMAMI_WEBSITE_ID}
					data-domains="akmalhisyam.my.id"
					async
					defer
				/>
			</body>
		</html>
	);
};

export default RootLayout;

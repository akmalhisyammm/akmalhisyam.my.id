/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
	siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
	generateRobotsTxt: true,
};

export default nextSitemapConfig;

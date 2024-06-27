import { i18nRouter } from 'next-i18n-router';

import i18nConfig from '../i18n.config.mjs';

import type { NextRequest } from 'next/server';

export const middleware = (req: NextRequest) => {
	return i18nRouter(req, i18nConfig);
};

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|manifest.json|robots.txt|icons).*)',
	],
};

'use client';

import { createContext } from 'react';

import type { About } from '@/types/about';

type Context = {
	about: About;
};

export const AboutContext = createContext<Context>({
	about: {
		name: '',
		nickname: '',
		occupation: '',
		photo: '',
		avatar: '',
		resume: '',
		summary: {
			en: [],
			id: [],
		},
		favoriteTechStacks: [],
		socials: [],
	},
});

import type { Locale, TechStack } from './globals';

export type Project = {
	id: string;
	name: string;
	description: Locale;
	type: Locale;
	logo: string;
	preview: string;
	techStacks: TechStack[];
	link: string;
	isFeatured: boolean;
};

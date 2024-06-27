import type { IconType } from 'react-icons';

export type Locale = {
	en: string | string[];
	id: string | string[];
};

export type TechStack = {
	name: string;
	icon: IconType;
};

export type SocialMedia = {
	name: string;
	icon: IconType;
	link: string;
};

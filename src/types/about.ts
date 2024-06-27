import type { Locale, SocialMedia, TechStack } from './globals';

export type About = {
	name: string;
	nickname: string;
	occupation: string;
	photo: string;
	avatar: string;
	resume: string;
	summary: Locale;
	favoriteTechStacks: TechStack[];
	socials: SocialMedia[];
};

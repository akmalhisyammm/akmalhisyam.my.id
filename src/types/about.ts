import type { ILocale, ISocialMedia, ITechStack } from './globals';

export interface IAbout {
  name: string;
  nickname: string;
  occupation: string;
  photo: string;
  avatar: string;
  resume: string;
  summary: ILocale;
  favoriteTechStacks: ITechStack[];
  socials: ISocialMedia[];
}

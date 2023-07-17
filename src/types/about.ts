import type { ISocialMedia, ITechStack } from './globals';

export interface IAbout {
  photo: string;
  avatar: string;
  resume: string;
  headline: string;
  summaries: string[];
  favoriteTechStacks: ITechStack[];
  socials: ISocialMedia[];
}

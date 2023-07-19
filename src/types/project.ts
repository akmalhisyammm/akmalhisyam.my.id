import type { ILocale, ITechStack } from './globals';

export interface IProject {
  id: string;
  name: string;
  description: ILocale;
  type: ILocale;
  logo: string;
  preview: string;
  techStacks: ITechStack[];
  link: string;
  isFeatured: boolean;
}

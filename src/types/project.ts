import type { ITechStack } from './globals';

export interface IProject {
  id: string;
  name: string;
  description: string;
  type: 'Personal' | 'Group';
  logo: string;
  preview: string;
  techStacks: ITechStack[];
  link: string;
  isFeatured: boolean;
}

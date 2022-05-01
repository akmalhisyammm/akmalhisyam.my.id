import { IconType } from 'react-icons';

interface TechStackData {
  name: string;
  icon: IconType;
}

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  type: 'Personal' | 'Group';
  tech_stack: TechStackData[];
  icon_path: string;
  preview_path: string;
  link: string;
}

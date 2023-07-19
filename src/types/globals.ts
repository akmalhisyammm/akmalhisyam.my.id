import type { IconType } from 'react-icons';

export interface ILocale {
  en: string | string[];
  id: string | string[];
}

export interface ITechStack {
  name: string;
  icon: IconType;
}

export interface ISocialMedia {
  name: string;
  icon: IconType;
  link: string;
}

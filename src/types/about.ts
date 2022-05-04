import { IconType } from 'react-icons';

interface SummaryData {
  paragraph_1: string;
  paragraph_2: string;
}

interface FavoriteTechStackData {
  name: string;
  icon: IconType;
}

interface SocialMediaData {
  name: string;
  icon: IconType;
  link: string;
}

export interface AboutData {
  photo: string;
  summary: SummaryData;
  favorite_tech_stack: FavoriteTechStackData[];
  social_media: SocialMediaData[];
}

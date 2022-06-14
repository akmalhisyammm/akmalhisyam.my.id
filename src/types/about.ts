import { IconType } from 'react-icons';

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
  photo_path: string;
  summary: string[];
  favorite_tech_stack: FavoriteTechStackData[];
  social_media: SocialMediaData[];
  resume_link: string;
}

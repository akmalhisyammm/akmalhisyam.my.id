import {
  SiChakraui,
  SiFirebase,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiNextdotjs,
  SiReact,
  SiTwitter,
  SiTypescript,
} from 'react-icons/si';

import { AboutContext } from './AboutContext';
import { IMAGE_URL } from '@/constants/url';

import type { IAbout } from '@/types/about';

type AboutProviderProps = {
  children: React.ReactNode;
};

export const AboutProvider = ({ children }: AboutProviderProps) => {
  const about: IAbout = {
    photo: `${IMAGE_URL}/about/akmal.jpg`,
    avatar: `${IMAGE_URL}/about/avatar.png`,
    resume: 'https://drive.google.com/file/d/14_5Lm34faG40OVfLCNkue4Ao0MJUomTi/view?usp=sharing',
    headline: 'Currently working as a Freelance Front-End Developer.',
    summaries: [
      "Hi! I'm Muhammad Akmal Hisyam, you can call me Akmal. I have a strong interest in exploring\
      web and mobile app development. I started learning web development at the end of 2020,\
      especially front-end development. After that, I started learning mobile application\
      development at the end of 2021.",
      "Currently, I'm learning React framework and its ecosystem. I usually take online courses\
      and understand code from other developers' projects to find best practices in writing code\
      and improve my skills. I enjoy learning something that I'm passionate about.",
    ],
    favoriteTechStacks: [
      {
        name: 'Next.js',
        icon: SiNextdotjs,
      },
      {
        name: 'React',
        icon: SiReact,
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
      },
      {
        name: 'Chakra UI',
        icon: SiChakraui,
      },
      {
        name: 'Firebase',
        icon: SiFirebase,
      },
    ],
    socials: [
      {
        name: 'LinkedIn',
        icon: SiLinkedin,
        link: 'https://www.linkedin.com/in/muhammad-akmal-hisyam',
      },
      {
        name: 'GitHub',
        icon: SiGithub,
        link: 'https://github.com/akmalhisyammm',
      },
      {
        name: 'Instagram',
        icon: SiInstagram,
        link: 'https://www.instagram.com/akmalhisyam1',
      },
      {
        name: 'Twitter',
        icon: SiTwitter,
        link: 'https://twitter.com/akmalhisyammm',
      },
      {
        name: 'Email',
        icon: SiGmail,
        link: 'mailto:akmalhisyam.id@gmail.com',
      },
    ],
  };

  return <AboutContext.Provider value={{ about }}>{children}</AboutContext.Provider>;
};

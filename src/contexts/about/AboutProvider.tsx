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

import AboutContext from './About.context';

import type { ReactNode } from 'react';
import type { IAbout } from '@/types/about';

type AboutProviderProps = {
  children: ReactNode;
};

const AboutProvider = ({ children }: AboutProviderProps) => {
  const about: IAbout = {
    photo: 'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/about/akmal.jpg',
    avatar: 'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/about/avatar.png',
    resume: 'https://drive.google.com/file/d/1IIPyM3Tiw_aZHp6KNXgVviB8rrcQV2AL/view?usp=sharing',
    headline: 'Informatics student at Multimedia Nusantara University.',
    summaries: [
      "Hi! I'm Muhammad Akmal Hisyam, you can call me Akmal. I started learning web development\
      at the end of 2020, especially front-end development.",
      "Currently, I'm learning React framework and its ecosystem. I usually take online\
      courses and understand code from other people's projects to find best practices in\
      writing code and improve my skills. I enjoy learning something that I'm passionate\
      about.",
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

export default AboutProvider;

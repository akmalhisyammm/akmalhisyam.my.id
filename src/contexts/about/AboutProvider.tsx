import { ReactNode } from 'react';
import {
  SiChakraui,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiIonic,
  SiLinkedin,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { AboutData } from 'types/about';

import AboutContext from './About.context';

type AboutProviderProps = {
  children: ReactNode;
};

const AboutProvider = ({ children }: AboutProviderProps) => {
  const about: AboutData = {
    photo: '/about/akmal.jpg',
    summary: [
      "Hi! I'm Muhammad Akmal Hisyam, you can call me Akmal. I'm third year Informatics\
      student at Multimedia Nusantara University. In second year, I started to learn web\
      development, especially front-end development.",
      "Currently, I'm learning React framework and its ecosystem. I usually take online\
      courses and understand code from other people's projects to find best practices in\
      writing code and improve my skills. I enjoy learning something that I'm passionate\
      about.",
    ],
    favorite_tech_stack: [
      {
        name: 'React',
        icon: SiReact,
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
      },
      {
        name: 'Ionic',
        icon: SiIonic,
      },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
      },
      {
        name: 'Chakra UI',
        icon: SiChakraui,
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
      },
    ],
    social_media: [
      {
        name: 'LinkedIn',
        icon: SiLinkedin,
        link: 'https://www.linkedin.com/in/muhammadakmalhisyam/',
      },
      {
        name: 'GitHub',
        icon: SiGithub,
        link: 'https://github.com/akmalhisyammm',
      },
      {
        name: 'Instagram',
        icon: SiInstagram,
        link: 'https://www.instagram.com/akmalhisyam1/',
      },
      {
        name: 'Email',
        icon: SiGmail,
        link: 'mailto:akmalhisyam11@gmail.com',
      },
    ],
  };

  return <AboutContext.Provider value={{ about }}>{children}</AboutContext.Provider>;
};

export default AboutProvider;

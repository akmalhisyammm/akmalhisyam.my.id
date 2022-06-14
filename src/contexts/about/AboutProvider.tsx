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
  SiTwitter,
  SiTypescript,
} from 'react-icons/si';
import { AboutData } from 'types/about';

import AboutContext from './About.context';

type AboutProviderProps = {
  children: ReactNode;
};

const AboutProvider = ({ children }: AboutProviderProps) => {
  const about: AboutData = {
    photo_path: '/about/akmal.jpg',
    summary: [
      "Hi! I'm Muhammad Akmal Hisyam, you can call me Akmal. I'm a third-year Informatics\
      student at Multimedia Nusantara University. I started learning web development in\
      my second year, especially front-end development.",
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
        link: 'https://www.linkedin.com/in/muhammadakmalhisyam',
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
        link: 'mailto:akmalhisyam11@gmail.com',
      },
    ],
    resume_link: 'https://drive.google.com/file/d/1foKxiUSFLc7hwLodudIzROcajI-Qc1-B/view',
  };

  return <AboutContext.Provider value={{ about }}>{children}</AboutContext.Provider>;
};

export default AboutProvider;

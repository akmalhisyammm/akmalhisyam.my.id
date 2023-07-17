import {
  SiBootstrap,
  SiChakraui,
  SiExpress,
  SiFirebase,
  SiIonic,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

import ProjectContext from './Project.context';

import type { ReactNode } from 'react';
import type { IProject } from '@/types/project';

type ProjectProviderProps = {
  children: ReactNode;
};

const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const projects: IProject[] = [
    {
      id: 'P001',
      name: 'Countdown Timer',
      description: 'Site to countdown according to a predetermined time.',
      type: 'Personal',
      logo: 'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/icons/countdown-timer.png',
      preview:
        'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/previews/countdown-timer_preview.png',
      techStacks: [
        {
          name: 'React',
          icon: SiReact,
        },
        {
          name: 'JavaScript',
          icon: SiJavascript,
        },
        {
          name: 'Material UI',
          icon: SiMui,
        },
      ],
      link: 'https://countdowntimer.akmalhisyam.my.id/',
      isFeatured: false,
    },
    {
      id: 'P002',
      name: 'Random Quote Generator',
      description: 'Site to generate random quotes from Quotable.io API.',
      type: 'Personal',
      logo: 'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/icons/random-quote-generator.png',
      preview:
        'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/previews/random-quote-generator_preview.png',
      techStacks: [
        {
          name: 'React',
          icon: SiReact,
        },
        {
          name: 'JavaScript',
          icon: SiJavascript,
        },
        {
          name: 'Material UI',
          icon: SiMui,
        },
      ],
      link: 'https://randquotegenerator.akmalhisyam.my.id/',
      isFeatured: false,
    },
    {
      id: 'P003',
      name: 'Gamma-5',
      description:
        'Web-based expert system to assist prospective students in determining college majors based on their personality',
      type: 'Group',
      logo: 'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/icons/gamma-5.png',
      preview:
        'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/previews/gamma-5_preview.png',
      techStacks: [
        {
          name: 'Next.js',
          icon: SiNextdotjs,
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
      link: 'https://gammafive.akmalhisyam.my.id/',
      isFeatured: true,
    },
    {
      id: 'P004',
      name: 'KlikDarurat',
      description:
        'Application to assist Indonesian citizens in finding emergency service contacts and the nearest emergency service location based on their current location.',
      type: 'Group',
      logo: 'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/icons/klikdarurat.png',
      preview:
        'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/previews/klikdarurat_preview.png',
      techStacks: [
        {
          name: 'Ionic',
          icon: SiIonic,
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
          name: 'Firebase',
          icon: SiFirebase,
        },
      ],
      link: 'https://klikdarurat.akmalhisyam.my.id/',
      isFeatured: true,
    },
    {
      id: 'P005',
      name: 'Rikumovies',
      description: 'Site to display and search list of movies from The Movies Database (TMDB) API.',
      type: 'Personal',
      logo: 'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/icons/rikumovies.png',
      preview:
        'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/previews/rikumovies_preview.png',
      techStacks: [
        {
          name: 'Next.js',
          icon: SiNextdotjs,
        },
        {
          name: 'TypeScript',
          icon: SiTypescript,
        },
        {
          name: 'Chakra UI',
          icon: SiChakraui,
        },
      ],
      link: 'https://rikumovies.akmalhisyam.my.id/',
      isFeatured: true,
    },
    {
      id: 'P006',
      name: 'Matsuri',
      description:
        'Site to assist organizer in creating, promoting, and selling tickets for their events.',
      type: 'Personal',
      logo: 'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/icons/matsuri.png',
      preview:
        'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/previews/matsuri_preview.png',
      techStacks: [
        {
          name: 'Next.js',
          icon: SiNextdotjs,
        },
        {
          name: 'TypeScript',
          icon: SiTypescript,
        },
        {
          name: 'Bootstrap',
          icon: SiBootstrap,
        },
        {
          name: 'Express.js',
          icon: SiExpress,
        },
        {
          name: 'MongoDB',
          icon: SiMongodb,
        },
      ],
      link: 'https://matsuri.akmalhisyam.my.id/',
      isFeatured: false,
    },
    {
      id: 'P007',
      name: 'Gitpedia',
      description: 'Application to assist developers learn Git in an easy and fun way.',
      type: 'Personal',
      logo: 'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/icons/gitpedia.png',
      preview:
        'https://akmalhisyam.s3.ap-southeast-1.amazonaws.com/projects/previews/gitpedia_preview.png',
      techStacks: [
        {
          name: 'Ionic',
          icon: SiIonic,
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
          name: 'Firebase',
          icon: SiFirebase,
        },
      ],
      link: 'https://gitpedia.akmalhisyam.my.id/',
      isFeatured: true,
    },
  ];

  return <ProjectContext.Provider value={{ projects }}>{children}</ProjectContext.Provider>;
};

export default ProjectProvider;

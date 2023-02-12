import { ReactNode } from 'react';
import { SiChakraui, SiIonic, SiMaterialui, SiNextdotjs, SiReact } from 'react-icons/si';

import { ProjectData } from 'types/project';
import ProjectContext from './Project.context';

type ProjectProviderProps = {
  children: ReactNode;
};

const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const projects: ProjectData[] = [
    {
      id: 'P001',
      name: 'COVID-19 Statistic',
      description:
        'Site to monitor COVID-19 statistical data globally or based on selected country.',
      type: 'Personal',
      icon_path: '/projects/icons/covid-19.png',
      preview_path: '/projects/previews/covid-19_preview.png',
      tech_stack: [
        {
          name: 'Next.js',
          icon: SiNextdotjs,
        },
        {
          name: 'Chakra UI',
          icon: SiChakraui,
        },
      ],
      link: 'https://covid19.akmalhisyam.my.id/',
    },
    {
      id: 'P002',
      name: 'RikuMovies',
      description: 'Site to display and search list of movies from The Movies Database (TMDB) API.',
      type: 'Personal',
      icon_path: '/projects/icons/rikumovies.png',
      preview_path: '/projects/previews/rikumovies_preview.png',
      tech_stack: [
        {
          name: 'Next.js',
          icon: SiNextdotjs,
        },
        {
          name: 'Chakra UI',
          icon: SiChakraui,
        },
      ],
      link: 'https://rikumovies.akmalhisyam.my.id/',
    },
    {
      id: 'P003',
      name: 'KlikDarurat',
      description:
        'Application to assist Indonesian citizens in finding emergency service contacts and the nearest emergency service location based on their current location.',
      type: 'Group',
      icon_path: '/projects/icons/klikdarurat.png',
      preview_path: '/projects/previews/klikdarurat_preview.png',
      tech_stack: [
        {
          name: 'Ionic',
          icon: SiIonic,
        },
        {
          name: 'React',
          icon: SiReact,
        },
      ],
      link: 'https://klikdarurat.akmalhisyam.my.id/',
    },
    {
      id: 'P004',
      name: 'Gamma-5',
      description:
        'Web-based expert system to assist prospective students in determining college majors based on their personality',
      type: 'Group',
      icon_path: '/projects/icons/gamma-5.png',
      preview_path: '/projects/previews/gamma-5_preview.png',
      tech_stack: [
        {
          name: 'Next.js',
          icon: SiNextdotjs,
        },
        {
          name: 'Chakra UI',
          icon: SiChakraui,
        },
      ],
      link: 'https://gammafive.akmalhisyam.my.id/',
    },
    {
      id: 'P005',
      name: 'Random Quote Generator',
      description: 'Site to generate random quotes from Quotable.io API.',
      type: 'Personal',
      icon_path: '/projects/icons/random-quote-generator.png',
      preview_path: '/projects/previews/random-quote-generator_preview.png',
      tech_stack: [
        {
          name: 'React',
          icon: SiReact,
        },
        {
          name: 'Material UI',
          icon: SiMaterialui,
        },
      ],
      link: 'https://randquotegenerator.akmalhisyam.my.id/',
    },
    {
      id: 'P006',
      name: 'Countdown Timer',
      description: 'Site to countdown according to a predetermined time.',
      type: 'Personal',
      icon_path: '/projects/icons/countdown-timer.png',
      preview_path: '/projects/previews/countdown-timer_preview.png',
      tech_stack: [
        {
          name: 'React',
          icon: SiReact,
        },
        {
          name: 'Material UI',
          icon: SiMaterialui,
        },
      ],
      link: 'https://countdowntimer.akmalhisyam.my.id/',
    },
  ];

  return <ProjectContext.Provider value={{ projects }}>{children}</ProjectContext.Provider>;
};

export default ProjectProvider;

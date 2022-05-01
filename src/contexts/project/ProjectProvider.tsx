import { ReactNode } from 'react';
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
      description: 'COVID-19 statistics web app.',
      other_creators: [],
      icon_path: '/projects/icons/covid-19.png',
      preview_path: '/projects/previews/covid-19_preview.png',
      link: 'https://covid-19-statistic.vercel.app/',
    },
    {
      id: 'P002',
      name: 'RikuMovies',
      description: 'Movie collection web app.',
      other_creators: [],
      icon_path: '/projects/icons/rikumovies.png',
      preview_path: '/projects/previews/rikumovies_preview.png',
      link: 'https://rikumovies.vercel.app/',
    },
    {
      id: 'P003',
      name: 'KlikDarurat',
      description: 'Emergency services app.',
      other_creators: [
        {
          id: 'C001',
          name: 'Ade Kiswara',
          github_link: 'https://github.com/adekiswara',
        },
        {
          id: 'C002',
          name: 'Dimas Lesmana',
          github_link: 'https://github.com/dimaslesmana',
        },
        {
          id: 'C003',
          name: 'Indra Prasetya Hadiwana',
          github_link: 'https://github.com/indrasb',
        },
        {
          id: 'C004',
          name: 'Muhammad Rezalutfi',
          github_link: 'https://github.com/Rezalutfi22',
        },
      ],
      icon_path: '/projects/icons/klikdarurat.png',
      preview_path: '/projects/previews/klikdarurat_preview.png',
      link: 'https://klikdarurat.vercel.app/',
    },
    {
      id: 'P004',
      name: 'Gamma-5',
      description: 'Web-based expert system to determine college majors based on personality.',
      other_creators: [
        {
          id: 'C001',
          name: 'Muhamad Fajri Tirta Nugraha',
          github_link: 'https://github.com/Fajri10-umn',
        },
        {
          id: 'C002',
          name: 'Pandu Wijaya',
          github_link: 'https://github.com/panduwijaya03',
        },
      ],
      icon_path: '/projects/icons/gamma-5.png',
      preview_path: '/projects/previews/gamma-5_preview.png',
      link: 'https://gamma-five.vercel.app/',
    },
    {
      id: 'P005',
      name: 'Random Quote Generator',
      description: 'Random quote generator web app.',
      other_creators: [],
      icon_path: '/projects/icons/random-quote-generator.png',
      preview_path: '/projects/previews/random-quote-generator_preview.png',
      link: 'https://akmal-random-quote-generator.vercel.app/',
    },
    {
      id: 'P006',
      name: 'Countdown Timer',
      description: 'Simple countdown timer web app.',
      other_creators: [],
      icon_path: '/projects/icons/countdown-timer.png',
      preview_path: '/projects/previews/countdown-timer_preview.png',
      link: 'https://akmal-countdown-timer.vercel.app/',
    },
  ];

  return <ProjectContext.Provider value={{ projects }}>{children}</ProjectContext.Provider>;
};

export default ProjectProvider;

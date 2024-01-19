'use client';

import {
  SiChakraui,
  SiExpress,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTwitter,
  SiTypescript,
} from 'react-icons/si';

import { AboutContext } from './AboutContext';
import { IMAGE_URL } from '@/constants/url';

import type { About } from '@/types/about';

type AboutProviderProps = {
  children: React.ReactNode;
};

export const AboutProvider = ({ children }: AboutProviderProps) => {
  const about: About = {
    name: 'Muhammad Akmal Hisyam',
    nickname: 'Akmal',
    occupation: 'Freelance Front-End Developer',
    photo: `${IMAGE_URL}/about/akmal.jpg`,
    avatar: `${IMAGE_URL}/about/avatar.png`,
    resume:
      'https://drive.google.com/file/d/1B27jZp1Itowh6q4b-vkEXC3MaMMJczDS/view?usp=sharing',
    summary: {
      en: [
        "Hi! I'm Muhammad Akmal Hisyam, you can call me Akmal. I am an informatics graduate from\
        Multimedia Nusantara University. I have a strong interest in exploring web and mobile\
        application development. I started learning web development at the end of 2020, especially\
        front-end development. After that, I started learning mobile application development at\
        the end of 2021.",
        "Currently, I'm learning React framework and its ecosystem. I usually take online courses\
        and understand code from other developers' projects to find best practices in writing code\
        and improve my skills. I enjoy learning something that I'm passionate about.",
      ],
      id: [
        'Halo! Saya Muhammad Akmal Hisyam, biasa dipanggil Akmal. Saya adalah lulusan informatika\
        dari Universitas Multimedia Nusantara. Saya memiliki ketertarikan yang kuat dalam\
        mengeksplorasi pengembangan aplikasi web dan mobile. Saya mulai belajar pengembangan\
        aplikasi web pada akhir tahun 2020, terutama pengembangan front-end. Setelah itu, saya\
        mulai belajar pengembangan aplikasi mobile pada akhir tahun 2021.',
        'Saat ini, saya sedang belajar framework React dan ekosistemnya. Saya biasanya mengambil\
        kursus online dan memahami kode dari proyek pengembang lain untuk menemukan praktik terbaik\
        dalam menulis kode dan meningkatkan keterampilan saya. Saya menikmati belajar sesuatu yang\
        saya minati.',
      ],
    },
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
        name: 'Express.js',
        icon: SiExpress,
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
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

  return (
    <AboutContext.Provider value={{ about }}>{children}</AboutContext.Provider>
  );
};

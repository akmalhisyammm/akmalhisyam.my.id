import { createContext } from 'react';

import type { IAbout } from '@/types/about';

interface Context {
  about: IAbout;
}

export const AboutContext = createContext<Context>({
  about: {
    name: '',
    nickname: '',
    occupation: '',
    photo: '',
    avatar: '',
    resume: '',
    summary: {
      en: [],
      id: [],
    },
    favoriteTechStacks: [],
    socials: [],
  },
});

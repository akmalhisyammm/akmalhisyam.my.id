import { createContext } from 'react';

import type { IAbout } from '@/types/about';

interface Context {
  about: IAbout;
}

const AboutContext = createContext<Context>({
  about: {
    photo: '',
    avatar: '',
    resume: '',
    headline: '',
    summaries: [],
    favoriteTechStacks: [],
    socials: [],
  },
});

export default AboutContext;

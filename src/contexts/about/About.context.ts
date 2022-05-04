import { createContext } from 'react';
import { AboutData } from 'types/about';

interface Context {
  about: AboutData;
}

const AboutContext = createContext<Context>({
  about: {
    photo: '',
    summary: { paragraph_1: '', paragraph_2: '' },
    favorite_tech_stack: [],
    social_media: [],
  },
});

export default AboutContext;

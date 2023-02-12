import { createContext } from 'react';

import { AboutData } from 'types/about';

interface Context {
  about: AboutData;
}

const AboutContext = createContext<Context>({
  about: {
    photo_path: '',
    summary: [],
    favorite_tech_stack: [],
    social_media: [],
    resume_link: '',
  },
});

export default AboutContext;

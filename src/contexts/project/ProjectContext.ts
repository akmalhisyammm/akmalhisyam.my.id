import { createContext } from 'react';

import type { IProject } from '@/types/project';

interface Context {
  projects: IProject[];
}

export const ProjectContext = createContext<Context>({ projects: [] });

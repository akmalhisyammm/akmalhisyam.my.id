import { createContext } from 'react';

import type { IProject } from '@/types/project';

interface Context {
  projects: IProject[];
}

const ProjectContext = createContext<Context>({ projects: [] });

export default ProjectContext;

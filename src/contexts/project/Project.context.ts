import { createContext } from 'react';

import { ProjectData } from 'types/project';

interface Context {
  projects: ProjectData[];
}

const ProjectContext = createContext<Context>({ projects: [] });

export default ProjectContext;

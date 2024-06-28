'use client';

import { createContext } from 'react';

import type { Project } from '@/types/project';

type Context = {
  projects: Project[];
};

export const ProjectContext = createContext<Context>({ projects: [] });

import { render, screen, waitFor } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

import { AboutProvider } from '@/contexts/about';
import { ProjectProvider } from '@/contexts/project';
import Home from '@/pages';
import About from '@/pages/about';
import Projects from '@/pages/projects';

import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

test('Render Home page successfully', async () => {
  await waitFor(() => {
    render(
      <ChakraProvider>
        <AboutProvider>
          <ProjectProvider>
            <Home />
          </ProjectProvider>
        </AboutProvider>
      </ChakraProvider>,
    );
  });

  const greetingText = screen.getByText('hero.greeting');
  expect(greetingText).toBeInTheDocument();
});

test('Render Projects page successfully', async () => {
  await waitFor(() => {
    render(
      <ChakraProvider>
        <AboutProvider>
          <ProjectProvider>
            <Projects />
          </ProjectProvider>
        </AboutProvider>
      </ChakraProvider>,
    );
  });

  const titleText = screen.getByText('title');
  expect(titleText).toBeInTheDocument();
});

test('Render About page successfully', async () => {
  await waitFor(() => {
    render(
      <ChakraProvider>
        <AboutProvider>
          <ProjectProvider>
            <About />
          </ProjectProvider>
        </AboutProvider>
      </ChakraProvider>,
    );
  });

  const titleText = screen.getByText('title');
  expect(titleText).toBeInTheDocument();
});

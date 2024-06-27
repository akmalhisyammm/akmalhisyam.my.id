'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import { AboutProvider } from '@/contexts/about';
import { ProjectProvider } from '@/contexts/project';
import { theme } from '@/styles/theme';

type ProvidersProps = {
	children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<CacheProvider>
			<ChakraProvider theme={theme}>
				<AboutProvider>
					<ProjectProvider>{children}</ProjectProvider>
				</AboutProvider>
			</ChakraProvider>
		</CacheProvider>
	);
};

'use client';

import { Heading, useColorMode } from '@chakra-ui/react';

type BrandHeadingProps = {
	children: React.ReactNode;
	[key: string]: unknown;
};

const BrandHeading = ({ children, ...rest }: BrandHeadingProps) => {
	const { colorMode } = useColorMode();

	return (
		<Heading
			bgClip="text"
			bgGradient={
				colorMode === 'light'
					? 'linear(to-br, blue.500, blue.600)'
					: 'linear(to-br, blue.200, blue.300)'
			}
			{...rest}
		>
			{children}
		</Heading>
	);
};

export default BrandHeading;

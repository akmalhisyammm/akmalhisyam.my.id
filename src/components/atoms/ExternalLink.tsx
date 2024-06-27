'use client';

import { Link } from '@chakra-ui/react';

type ExternalLinkProps = {
	children: React.ReactNode;
	href?: string;
	[key: string]: unknown;
};

const ExternalLink = ({ children, href, ...rest }: ExternalLinkProps) => {
	return (
		<Link href={href} isExternal _hover={{ textDecoration: 'none' }} {...rest}>
			{children}
		</Link>
	);
};

export default ExternalLink;

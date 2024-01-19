'use client';

import { Link } from '@chakra-ui/next-js';
import { useColorMode } from '@chakra-ui/react';

type RouteLinkProps = {
  children: React.ReactNode;
  href: string;
  [key: string]: unknown;
};

const RouteLink = ({ children, href, ...rest }: RouteLinkProps) => {
  const { colorMode } = useColorMode();

  return (
    <Link
      href={href}
      _hover={{ color: colorMode === 'light' ? 'blue.500' : 'blue.200' }}
      {...rest}>
      {children}
    </Link>
  );
};

export default RouteLink;

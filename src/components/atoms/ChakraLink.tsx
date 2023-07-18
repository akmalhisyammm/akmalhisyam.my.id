import { Link } from '@chakra-ui/react';

type ChakraLinkProps = {
  children: React.ReactNode;
  href?: string;
  [key: string]: unknown;
};

const ChakraLink = ({ children, href, ...rest }: ChakraLinkProps) => {
  return (
    <Link href={href} isExternal {...rest}>
      {children}
    </Link>
  );
};

export default ChakraLink;

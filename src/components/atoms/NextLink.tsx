import Link from 'next/link';

type NextLinkProps = {
  children: React.ReactNode;
  href: string;
  [key: string]: unknown;
};

const NextLink = ({ children, href, ...rest }: NextLinkProps) => {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
};

export default NextLink;

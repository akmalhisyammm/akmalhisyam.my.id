import Head from 'next/head';

type MetaProps = { title?: string };

const Meta = ({ title }: MetaProps) => {
  return (
    <Head>
      <title>{title && `${title} | `}Akmal Hisyam</title>
    </Head>
  );
};

export default Meta;

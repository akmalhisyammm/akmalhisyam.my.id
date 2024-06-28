import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'This page does not exist.',
  alternates: {
    canonical: '/*',
  },
  openGraph: {
    title: 'Not Found | Akmal Hisyam',
    url: '/*',
    description: 'This page does not exist.',
    locale: 'en_US',
  },
};

const Rest = () => {
  return notFound();
};

export default Rest;

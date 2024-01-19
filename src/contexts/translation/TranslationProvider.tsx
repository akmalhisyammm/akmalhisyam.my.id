'use client';

import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';

import { initTranslations } from '@/utils/i18n';

import type { Resource } from 'i18next';

type TranslationProviderProps = {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
};

export const TranslationProvider = ({
  children,
  locale,
  namespaces,
  resources,
}: TranslationProviderProps) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

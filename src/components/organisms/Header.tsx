'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { FaHome, FaRocket, FaUser } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';
import { RiMenuFill, RiMoonFill, RiSunLine } from 'react-icons/ri';

import { RouteLink } from '@/components/atoms';
import i18nConfig from '../../../i18n.config.mjs';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n, t } = useTranslation('common');

  const pathname = usePathname();
  const router = useRouter();

  const locale = i18n.language;
  const newLocale = locale === 'en' ? 'id' : 'en';

  const onToggleLocale = () => {
    const date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale}; expires=${date.toUTCString()}; path=/`;

    locale === i18nConfig.defaultLocale
      ? router.push(`/${newLocale}${pathname}`)
      : router.push(pathname.replace(`/${locale}`, `/${newLocale}`));

    router.refresh();
  };

  return (
    <Box
      as="header"
      width="full"
      height={70}
      backgroundColor={
        colorMode === 'light'
          ? 'rgba(237, 242, 247, 0.8)'
          : 'rgba(23, 25, 35, 0.8)'
      }
      backdropFilter="blur(10px)"
      position="fixed"
      zIndex={5}
    >
      <Container as="nav" maxWidth="container.lg" height="full" centerContent>
        <Flex
          width="full"
          height="full"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack spacing={[2, 4, 4]} display={['none', 'flex', 'flex']}>
            <RouteLink
              href="/"
              padding={3}
              color={
                pathname === '/' || pathname === '/id'
                  ? colorMode === 'light'
                    ? 'blue.500'
                    : 'blue.200'
                  : 'inherit'
              }
            >
              {t('header.home')}
            </RouteLink>
            <RouteLink
              href="/projects"
              padding={3}
              color={
                pathname === '/projects' || pathname === '/id/projects'
                  ? colorMode === 'light'
                    ? 'blue.500'
                    : 'blue.200'
                  : 'inherit'
              }
            >
              {t('header.projects')}
            </RouteLink>
            <RouteLink
              href="/about"
              padding={3}
              color={
                pathname === '/about' || pathname === '/id/about'
                  ? colorMode === 'light'
                    ? 'blue.500'
                    : 'blue.200'
                  : 'inherit'
              }
            >
              {t('header.about')}
            </RouteLink>
          </HStack>

          <Menu placement="bottom-end">
            <MenuButton
              as={IconButton}
              aria-label="Menu Toggle"
              display={['flex', 'none', 'none']}
              borderRadius="full"
              icon={<RiMenuFill />}
            />
            <MenuList>
              <RouteLink href="/">
                <MenuItem
                  color={
                    pathname === '/' || pathname === '/id'
                      ? colorMode === 'light'
                        ? 'blue.500'
                        : 'blue.200'
                      : 'inherit'
                  }
                  icon={<FaHome />}
                  _hover={{
                    color: colorMode === 'light' ? 'blue.500' : 'blue.200',
                  }}
                >
                  {t('header.home')}
                </MenuItem>
              </RouteLink>
              <RouteLink href="/projects">
                <MenuItem
                  color={
                    pathname === '/projects' || pathname === '/id/projects'
                      ? colorMode === 'light'
                        ? 'blue.500'
                        : 'blue.200'
                      : 'inherit'
                  }
                  icon={<FaRocket />}
                  _hover={{
                    color: colorMode === 'light' ? 'blue.500' : 'blue.200',
                  }}
                >
                  {t('header.projects')}
                </MenuItem>
              </RouteLink>
              <RouteLink href="/about">
                <MenuItem
                  color={
                    pathname === '/about' || pathname === '/id/about'
                      ? colorMode === 'light'
                        ? 'blue.500'
                        : 'blue.200'
                      : 'inherit'
                  }
                  icon={<FaUser />}
                  _hover={{
                    color: colorMode === 'light' ? 'blue.500' : 'blue.200',
                  }}
                >
                  {t('header.about')}
                </MenuItem>
              </RouteLink>
            </MenuList>
          </Menu>

          <HStack>
            <Button
              aria-label="Locale Toggle"
              borderRadius="full"
              leftIcon={<MdTranslate />}
              onClick={onToggleLocale}
            >
              {newLocale.toUpperCase()}
            </Button>
            <IconButton
              aria-label="Theme Toggle"
              borderRadius="full"
              icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
              onClick={toggleColorMode}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

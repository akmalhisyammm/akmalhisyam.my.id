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
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FaHome, FaRocket, FaUser } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';
import { RiMenuFill, RiMoonFill, RiSunLine } from 'react-icons/ri';

import { NextLink } from '@/components/atoms';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { t } = useTranslation('common');

  const router = useRouter();

  const onToggleLanguageClick = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  const newLocale = router.locale === 'en' ? 'id' : 'en';

  return (
    <Box
      as="header"
      width="full"
      height={70}
      backgroundColor={colorMode === 'light' ? 'rgba(237, 242, 247, 0.8)' : 'rgba(23, 25, 35, 0.8)'}
      backdropFilter="blur(10px)"
      position="fixed"
      zIndex={5}>
      <Container as="nav" maxWidth="container.lg" height="full" centerContent>
        <Flex width="full" height="full" justifyContent="space-between" alignItems="center">
          <HStack spacing={[2, 4, 4]} display={['none', 'flex', 'flex']}>
            <NextLink href="/" passHref>
              {router.pathname === '/' ? (
                <Text
                  cursor="pointer"
                  padding={3}
                  color={colorMode === 'light' ? 'blue.500' : 'blue.200'}>
                  {t('header.route.home')}
                </Text>
              ) : (
                <Text
                  cursor="pointer"
                  padding={3}
                  _hover={{ color: colorMode === 'light' ? 'blue.600' : 'blue.300' }}>
                  {t('header.route.home')}
                </Text>
              )}
            </NextLink>
            <NextLink href="/projects" passHref>
              {router.pathname === '/projects' ? (
                <Text
                  cursor="pointer"
                  padding={3}
                  color={colorMode === 'light' ? 'blue.500' : 'blue.200'}>
                  {t('header.route.projects')}
                </Text>
              ) : (
                <Text
                  cursor="pointer"
                  padding={3}
                  _hover={{ color: colorMode === 'light' ? 'blue.600' : 'blue.300' }}>
                  {t('header.route.projects')}
                </Text>
              )}
            </NextLink>
            <NextLink href="/about" passHref>
              {router.pathname === '/about' ? (
                <Text
                  cursor="pointer"
                  padding={3}
                  color={colorMode === 'light' ? 'blue.500' : 'blue.200'}>
                  {t('header.route.about')}
                </Text>
              ) : (
                <Text
                  cursor="pointer"
                  padding={3}
                  _hover={{ color: colorMode === 'light' ? 'blue.600' : 'blue.300' }}>
                  {t('header.route.about')}
                </Text>
              )}
            </NextLink>
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
              {router.pathname === '/' ? (
                <MenuItem color={colorMode === 'light' ? 'blue.500' : 'blue.200'} icon={<FaHome />}>
                  {t('header.route.home')}
                </MenuItem>
              ) : (
                <MenuItem
                  icon={<FaHome />}
                  onClick={() => router.push('/')}
                  _hover={{ color: colorMode === 'light' ? 'blue.600' : 'blue.300' }}>
                  {t('header.route.home')}
                </MenuItem>
              )}
              {router.pathname === '/projects' ? (
                <MenuItem
                  color={colorMode === 'light' ? 'blue.500' : 'blue.200'}
                  icon={<FaRocket />}>
                  {t('header.route.projects')}
                </MenuItem>
              ) : (
                <MenuItem
                  icon={<FaRocket />}
                  onClick={() => router.push('/projects')}
                  _hover={{ color: colorMode === 'light' ? 'blue.600' : 'blue.300' }}>
                  {t('header.route.projects')}
                </MenuItem>
              )}
              {router.pathname === '/about' ? (
                <MenuItem color={colorMode === 'light' ? 'blue.500' : 'blue.200'} icon={<FaUser />}>
                  {t('header.route.about')}
                </MenuItem>
              ) : (
                <MenuItem
                  icon={<FaUser />}
                  onClick={() => router.push('/about')}
                  _hover={{ color: colorMode === 'light' ? 'blue.600' : 'blue.300' }}>
                  {t('header.route.about')}
                </MenuItem>
              )}
            </MenuList>
          </Menu>

          <HStack>
            <Button
              aria-label="Language Toggle"
              borderRadius="full"
              leftIcon={<MdTranslate />}
              onClick={() => onToggleLanguageClick(newLocale)}>
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

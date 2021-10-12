import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  useDisclosure,
  useStyleConfig,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import { DarkModeSwitch } from '../dark-mode-switch';
import { useSecurity } from '../hooks';
import { Sidebar } from '../views';
import { NavbarAvatarMenu } from './navbar-avatar-menu';

export const Navbar = () => {
  const { loading, user } = useSecurity();
  const styles = useStyleConfig('Navbar');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Sidebar
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box zIndex="10" py="4" shadow="sm" sx={styles}>
        <Container
          maxWidth="container.xl"
          experimental_spaceX="4"
          display="flex"
          alignItems="center"
          px="6"
          mx="auto"
          justifyContent="space-between"
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex flex="0 1 auto">
            <Text fontSize="lg" fontWeight="bold">
              SARA
            </Text>
          </Flex>
          <List display="flex" alignItems="center" experimental_spaceX="3">
            <ListItem>
              <DarkModeSwitch />
            </ListItem>
            <ListItem>
              {user && !loading ? (
                <NavbarAvatarMenu />
              ) : (
                <Link href="/api/auth/signin">
                  <a
                    data-test="login"
                    className="px-4 py-2 text-sm font-medium leading-5 transition-colors duration-150 bg-skin-primary text-skin-button-primary border border-transparent rounded-lg
                  active:bg-opacity-60 hover:bg-opacity-80
                  focus:outline-none"
                  >
                    Conectar
                  </a>
                </Link>
              )}
            </ListItem>
          </List>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;

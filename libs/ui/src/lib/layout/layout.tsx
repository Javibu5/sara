import {
  Box,
  Container,
  Flex,
  useColorModeValue,
  useStyleConfig,
} from '@chakra-ui/react';
import React from 'react';

import { Navbar } from '../navbar';

export const Layout = ({ children }) => {
  const styles = useStyleConfig('Layout');

  return (
    <Flex height="100vh" sx={styles}>
      <Flex flexDirection="column" flex="1 1 0%">
        <Navbar />
        <Box as="main" pb="16" overflowY="auto">
          <Container
            maxWidth="container.xl"
            px={{ base: '0', sm: '6' }}
            mx="auto"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;

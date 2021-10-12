import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { AccessDenied, Layout } from '@sara/ui';
import { useSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';
import { AiFillEdit, AiTwotoneLock } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs';

export default function Task() {
  const [session, loading] = useSession();

  if (!session) {
    return <AccessDenied />;
  }

  return (
    <Layout>
      <Project></Project>
    </Layout>
  );
}

const Project = () => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue('white', 'gray.800')}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            Mar 10, 2019
          </chakra.span>
        </Flex>

        <Box mt={2}>
          <Heading
            fontSize="2xl"
            color={useColorModeValue('gray.700', 'white')}
            fontWeight="700"
            _hover={{
              color: useColorModeValue('gray.600', 'gray.200'),
              textDecor: 'underline',
            }}
          >
            Accessibility tools for designers and developers
          </Heading>
          <chakra.p mt={2} color={useColorModeValue('gray.600', 'gray.300')}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Flex alignItems="center">
            <TasksList></TasksList>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

function TasksList() {
  const data = [
    { name: 'Daggy', created: '7 days ago' },
    { name: 'Anubra', created: '23 hours ago' },
    { name: 'Josef', created: 'A few seconds ago' },
    { name: 'Sage', created: 'A few hours ago' },
  ];
  return (
    <Stack
      direction={{ base: 'column' }}
      w="full"
      bg={{ md: useColorModeValue('white', 'gray.800') }}
      shadow="lg"
    >
      {data.map((token, tid) => {
        return (
          <Flex
            w="full"
            direction={{ base: 'row', md: 'column' }}
            bg={useColorModeValue('white', 'gray.800')}
            key={tid}
          >
            <SimpleGrid
              spacingY={3}
              columns={{ base: 1, md: 2 }}
              w="full"
              py={2}
              px={10}
              fontWeight="hairline"
            >
              <chakra.span
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                {token.name}
              </chakra.span>
              <Flex justify={{ md: 'end' }}>
                <Button
                  size="sm"
                  variant="solid"
                  leftIcon={<Icon as={AiTwotoneLock} />}
                  colorScheme="purple"
                >
                  View Profile
                </Button>
              </Flex>
            </SimpleGrid>
          </Flex>
        );
      })}
    </Stack>
  );
}

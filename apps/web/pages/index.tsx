import { Center, Text } from '@chakra-ui/react';
import { Layout } from '@sara/ui';
import { useSession } from 'next-auth/client';
import React from 'react';

export default function Index() {
  const [session, loading] = useSession();

  return (
    <Layout session={session}>
      <Center h="100px" color="white">
        <Text fontSize="4xl"> Bienvenido a SARA</Text>
      </Center>
    </Layout>
  );
}

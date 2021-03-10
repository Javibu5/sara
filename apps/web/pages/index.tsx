import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Layout } from '@sara/ui';
import { useSession } from 'next-auth/client';
import jwt from 'next-auth/jwt';
import React from 'react';

import { useUser } from '../hooks/useSWR';

export default function Index() {
  const [session, loading] = useSession();

  const { user, isLoading, isError } = useUser();

  return (
    <Layout session={session}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example ...
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}

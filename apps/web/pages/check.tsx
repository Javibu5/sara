import { Box, Container } from '@material-ui/core';
import { useTodayChecks, useUser } from '@sara/hooks';
import { AccessDenied,Layout, UIcheckModule } from '@sara/ui';
import { useSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';

export default function Check() {
  const [session, loading] = useSession();

  if (!session) {
    return <AccessDenied />;
  }

  return (
    <Layout>
      <UIcheckModule></UIcheckModule>
    </Layout>
  );
}

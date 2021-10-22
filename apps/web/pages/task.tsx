import { AccessDenied, Layout, Project } from '@sara/ui';
import { useSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';

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

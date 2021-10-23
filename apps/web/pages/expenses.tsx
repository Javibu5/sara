import { AccessDenied, ExpenseModule, Layout } from '@sara/ui';
import { useSession } from 'next-auth/client';
import React from 'react';

export default function Expenses() {
  const [session, loading] = useSession();

  if (!session) {
    return <AccessDenied />;
  }

  return (
    <Layout>
      <ExpenseModule></ExpenseModule>
    </Layout>
  );
}

import { AccessDenied, EmployeeProfile, Layout } from '@sara/ui';
import { useSession } from 'next-auth/client';

export default function EmployeeProfilePage() {
  const [session, loading] = useSession();

  if (!session) {
    return <AccessDenied />;
  }

  return (
    <Layout>
      <EmployeeProfile></EmployeeProfile>
    </Layout>
  );
}

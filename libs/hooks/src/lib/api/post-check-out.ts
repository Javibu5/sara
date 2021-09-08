import { useSession } from 'next-auth/client';

export const postCheckOut = async (id, session) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/checks/out`, {
    method: 'Post',
    headers: {
      Authorization: `Bearer ${session.access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  });
};

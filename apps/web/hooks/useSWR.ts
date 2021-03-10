import { useSession } from 'next-auth/client';
import useSWR from 'swr';

export function useUser() {
  const [session, loading] = useSession();
  const { data, error } = useSWR(
    !loading ? ['/api/users', session.access_token] : null,
    fetchWithUser
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const fetchWithUser = async (url: string, token: string) => {
  return fetch(`${url}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw Error;
    }
  });
};

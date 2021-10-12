import { useRouter } from 'next/router';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/client';
import React, { useEffect } from 'react';
import useSWR, { mutate } from 'swr';

// from: https://github.com/nextauthjs/next-auth/issues/596#issuecomment-846595890
// allows to mutate and revalidate
export const mutateSession = (data?: Session, shouldRevalidate?: boolean) =>
  mutate('/api/auth/session', data, shouldRevalidate);

// parse the response
const fetcher = (url) => fetch(url).then((r) => r.json());

export function useSecurity({ redirectTo = '', redirectIfFound = false } = {}) {
  const router = useRouter();
  const [, loading] = useSession(); // check if provider is still loading (avoid redirecting)
  const { data: session, isValidating } = useSWR<Session>(
    '/api/auth/session',
    fetcher
  );

  const hasSession = Boolean(session?.user);
  const isLoading = loading || (!session && isValidating);

  useEffect(() => {
    if (!redirectTo || isLoading) return;
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasSession) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasSession)
    ) {
      router.push(redirectTo);
    }
  }, [redirectTo, redirectIfFound, hasSession, isLoading, router]);

  return { loading, user: session?.user ?? null };
}

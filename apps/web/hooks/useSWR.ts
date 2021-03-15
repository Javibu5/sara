import { useSession } from 'next-auth/client';
import useSWR from 'swr';
import { Loader } from 'webpack';
import { CheckDto } from '../../../libs/contracts/src';

export interface IuseTodayChecks {
  todayChecks: CheckDto[];
  isLoadingTodayChecks: boolean;
  isErrorTodayChecks: Error;
}

export function useChecks() {
  const [session, loading] = useSession();

  const { data, error } = useSWR(
    !loading ? [`/api/checks`, session.access_token] : null,
    fetchWithUser
  );

  return {
    checks: data,
    isLoadingChecks: !error && !data,
    isErrorChecks: error,
  };
}

export function useTodayChecks(): IuseTodayChecks {
  const [session, loading] = useSession();

  const { data, error } = useSWR(
    !loading ? [`/api/checks/today`, session.access_token] : null,
    fetchWithUser
  );

  return {
    todayChecks: data,
    isLoadingTodayChecks: !error && !data,
    isErrorTodayChecks: error,
  };
}

export function useCheck(method) {
  const [session, loading] = useSession();

  if (method !== 'in' || 'out') {
    return new Error();
  }

  const { data, error } = useSWR(
    !loading ? [`/api/checks/${method}`, session.access_token] : null,
    fetchWithUser
  );

  return {
    res: data,
    isLoadingCheck: !error && !data,
    isErrorCheck: error,
  };
}

export function useUser() {
  const [session, loading] = useSession();
  const { data, error } = useSWR(
    !loading ? ['/api/users', session.access_token] : null,
    fetchWithUser
  );

  return {
    user: data,
    isLoadingUser: !error && !data,
    isErrorUser: error,
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

import { CheckDto } from '@sara/contracts/check';
import { useSession } from 'next-auth/client';
import useSWR from 'swr';

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

export function useTasks() {
  const [session, loading] = useSession();

  const { data, error } = useSWR(
    !loading ? [`/api/tasks`, session.access_token] : null,
    fetchWithUser
  );
  return {
    tasks: data,
    isLoadingTasks: !error && !data,
    isErrorTasks: error,
  };
}

export function useProjects() {
  const [session, loading] = useSession();

  const { data, error } = useSWR(
    !loading ? [`/api/projects`, session.access_token] : null,
    fetchWithUser
  );

  return {
    projects: data,
    isLoadingProjects: !error && !data,
    isErrorProjects: error,
  };
}

export function useExpenses() {
  const [session, loading] = useSession();

  const { data, error } = useSWR(
    !loading ? [`/api/expenses`, session.access_token] : null,
    fetchWithUser
  );

  return {
    expenses: data,
    isLoadingExpenses: !error && !data,
    isErrorExpenses: error,
  };
}

export function useCreditCard(id: string) {
  const [session, loading] = useSession();

  const { data, error } = useSWR(
    !loading ? [`/api/creditCards/${id}`, session.access_token] : null,
    fetchWithUser
  );

  return {
    creditCard: data,
    isLoadingCreditCard: !error && !data,
    isErrorCreditCard: error,
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
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
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
      console.log('NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL);
      throw Error;
    }
  });
};

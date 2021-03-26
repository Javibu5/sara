import useFetch from 'use-http';

export function getOptions(token) {
  const options = {
    interceptors: {
      // every time we make an http request, this will run 1st before the request is made
      // url, path and route are supplied to the interceptor
      // request options can be modified and must be returned
      request: async ({ options, url, path, route }) => {
        options.headers.Authorization = `Bearer ${token}`;

        return options;
      },
    },
  };

  return options;
}

export function useCheckInHandler(): void {
  const [request] = useFetch('/api/checks/in');

  request.post();
}

export function useCheckOutHandler() {
  const { request } = useFetch('/api/checks/out');
  request.post();
}

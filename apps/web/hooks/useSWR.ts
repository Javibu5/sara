import axios from 'axios'
import useSWR from 'swr'


export function useUser(id) {
    const { data, error } = useSWR(`/api/users`)

    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}


export const fetchWithUser = async (url: string, token: string) => {
    return fetch(`${baseUrl}${url}`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
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
import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

export function useUser(id) {
    const { data, error } = useSWR(`/api/users/${id}`, fetcher)

    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}
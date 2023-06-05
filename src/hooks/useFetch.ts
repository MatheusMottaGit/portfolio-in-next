import axios, { AxiosPromise } from "axios"
import { useQuery } from "react-query"

export const useFetch = <T = unknown>(url: string, key: string) => {
  const fetcher = (): AxiosPromise<T> => {
    return axios.get(url)
  }

  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: [ key ]
  })

  return { 
    data: data?.data
  }
}
import useSWR from 'swr'
import urljoin from 'url-join'
import { useAtomicContext } from '../component/provider'
import FetchError from '../lib/error'
import fetcher from '../lib/fetcher'
import { FetchResult } from '../typings/fetch'

interface useAtomicGetterProps<T, K = Record<string, any>> {
  /**
   * Api url endpoint to send request.
   */
  uri: string
  /**
   * Request params.
   */
  params?: T
  /**
   * Atomicassets api endpoint.
   */
  endpoint?: string
  /**
   * Set initial data, used when using SSR or SSG rendering with Next
   */
  initialData?: K
}

/**
 * Custom request hook for sending request to custom atomicasset endpoints.
 *
 * @param props Request props.
 * @returns FetchResult<K>
 */
const useAtomicGetter = <
  K,
  T extends Record<string, any> = Record<string, any>
>(
  props?: useAtomicGetterProps<T> | null
): FetchResult<K> => {
  let { uri, params, endpoint } = props ?? { uri: '' }

  const { endpoint: contextEndpoint } = useAtomicContext()

  endpoint = (endpoint != null ? endpoint : contextEndpoint) ?? ''

  // TODO: check if endpoint is blank and return an error

  const { data, error } = useSWR<K, FetchError>(
    props != null ? [urljoin(endpoint, uri), params] : null,
    fetcher
  )

  let isError = false
  if (error != null) {
    isError = true
  }

  return { data, isError, error }
}

export default useAtomicGetter

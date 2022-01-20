import useSWR from 'swr'
import urljoin from 'url-join'
import { useAtomicContext } from '../component/provider'
import FetchError from '../lib/error'
import fetcher from '../lib/fetcher'
import { FetchResult } from '../typings/fetch'

interface useAtomicGetterProps<T> {
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

  endpoint = endpoint != null ? endpoint : contextEndpoint
  if (endpoint == null || endpoint === '') {
    throw new Error('No AtomicAssets endpoint set!')
  }

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

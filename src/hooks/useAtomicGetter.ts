import useSWR from 'swr'
import urljoin from 'url-join'
import { useAtomicContext } from '../component/provider'
import FetchError from '../lib/error'
import fetcher from '../lib/fetcher'
import { FetchResult } from '../typings/fetch'

/**
 * Custom request hook for sending request to custom atomicasset endpoints.
 *
 * @param url Atomicassets endpoint url.
 * @param params Url params to request
 * @param endpoint Atomicassets endpoint
 * @returns FetchResult<K>
 */
const useAtomicGetter = <K, T extends Record<string, any>>(
  url?: string,
  params?: T,
  endpoint?: string
): FetchResult<K> => {
  const { endpoint: contextEndpoint } = useAtomicContext()

  endpoint = endpoint != null ? endpoint : contextEndpoint
  if (endpoint == null || endpoint === '') {
    throw new Error('No AtomicAssets endpoint set!')
  }

  const { data, error } = useSWR<K, FetchError>(
    url != null ? [urljoin(endpoint, url), params] : null,
    fetcher
  )

  let isError = false
  if (error != null) {
    isError = true
  }

  return { data, isError, error }
}

export default useAtomicGetter

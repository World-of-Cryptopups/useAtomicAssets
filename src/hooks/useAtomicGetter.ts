import useSWR from 'swr'
import urljoin from 'url-join'
import { useAtomicContext } from '../component/provider'
import FetchError from '../lib/error'
import fetcher from '../lib/fetcher'
import { FetchResult } from '../typings/fetch'

interface useAtomicGetterProps<T extends Record<string, any>> {
  url?: string
  params?: T
  endpoint?: string
}

/**
 * Custom request hook for sending request to custom atomicasset endpoints.
 *
 * @param param useAtomicGetterProps<T>
 * @returns FetchResult<K>
 */
const useAtomicGetter = <K, T extends Record<string, any>>({
  url,
  params,
  endpoint
}: useAtomicGetterProps<T>): FetchResult<K> => {
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

import { ICollection } from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'
import useAtomicGetter from './useAtomicGetter'

interface useGetCollectionsProps {
  author?: string
  match?: string
  authorized_account?: string
  notify_account?: string
  collection_blacklist?: string
  collection_whitelist?: string
  ids?: string
  lower_bound?: string
  upper_bound?: string
  before?: number
  after?: number
  page?: number
  limit?: number
  order?: 'asc' | 'desc'
  sort?: 'created' | 'collection_name'
}

/**
 * Fetch collections.
 *
 * @param props Query options.
 * @param endpoint Atomicassets endpoint.
 * @returns FetchResult<ICollection[]>
 */
const useGetCollections = (
  props?: useGetCollectionsProps | null,
  endpoint?: string
): FetchResult<ICollection[]> => {
  return useAtomicGetter<ICollection[]>(
    props != null
      ? { uri: '/atomicassets/v1/collections', params: props, endpoint }
      : null
  )
}

export default useGetCollections

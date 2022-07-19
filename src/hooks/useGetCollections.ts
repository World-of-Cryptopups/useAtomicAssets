import { QueryOptions } from '../lib/fetcher'
import {
  DateBoundaryParams,
  GreylistParams,
  ICollection,
  PrimaryBoundaryParams
} from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'
import { PageLimitOrderParams } from '../typings/params'
import useAtomicGetter from './useAtomicGetter'

interface useGetCollectionsProps
  extends GreylistParams,
    PrimaryBoundaryParams,
    DateBoundaryParams,
    PageLimitOrderParams {
  author?: string
  match?: string
  authorized_account?: string
  notify_account?: string
  sort?: 'created' | 'collection_name'
}

/**
 * Fetch collections.
 *
 * `/atomicassets/v1/collections`
 *
 * @param props Query options.
 * @param options Set custom fetch options.
 * @returns FetchResult<ICollection[]>
 */
const useGetCollections = <T = Record<string, any>>(
  props?: useGetCollectionsProps | null,
  options?: QueryOptions<T>
): FetchResult<ICollection[]> => {
  const { endpoint, initialData } = options ?? {}

  return useAtomicGetter<ICollection[]>(
    props != null
      ? {
          uri: '/atomicassets/v1/collections',
          params: props,
          endpoint,
          initialData
        }
      : null
  )
}

export default useGetCollections

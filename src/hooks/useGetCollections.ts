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

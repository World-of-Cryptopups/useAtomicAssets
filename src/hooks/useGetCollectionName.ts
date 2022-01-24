import { ICollection } from '../typings/atomicassets-js'
import useAtomicGetter from './useAtomicGetter'

/**
 * Find collection by its name.
 *
 * `/atomicassets/v1/collection/{collectionName}`
 *
 * @param collectionName Name of collection.
 * @param endpoint Atomicassets endpoint.
 * @returns FetchResult<ICollection>
 */
const useGetCollectionName = (
  collectionName?: string | null,
  endpoint?: string
) => {
  return useAtomicGetter<ICollection>(
    collectionName != null
      ? { uri: `/atomicassets/v1/collections/${collectionName}`, endpoint }
      : null
  )
}

export default useGetCollectionName

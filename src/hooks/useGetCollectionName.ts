import { useAtomicGetter } from '.'
import { ICollection } from '../typings/atomicassets-js'

/**
 * Find collection by its name.
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

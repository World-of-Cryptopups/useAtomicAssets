import { QueryOptions } from '../lib/fetcher'
import { ICollection } from '../typings/atomicassets-js'
import useAtomicGetter from './useAtomicGetter'

/**
 * Find collection by its name.
 *
 * `/atomicassets/v1/collection/{collectionName}`
 *
 * @param collectionName Name of collection.
 * @param options Set custom fetch options.
 * @returns FetchResult<ICollection>
 */
const useGetCollectionName = <T = Record<string, any>>(
  collectionName?: string | null,
  options?: QueryOptions<T>
) => {
  const { endpoint, initialData } = options ?? {}

  return useAtomicGetter<ICollection>(
    collectionName != null
      ? {
          uri: `/atomicassets/v1/collections/${collectionName}`,
          endpoint,
          initialData
        }
      : null
  )
}

export default useGetCollectionName

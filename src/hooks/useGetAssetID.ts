import { QueryOptions } from '../lib/fetcher'
import { IAsset } from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'
import useAtomicGetter from './useAtomicGetter'

/**
 * Fetch asset by id.
 *
 * `/atomicassets/v1/assets/{assetId}`
 *
 * @param assetId ID of asset
 * @param options Set custom fetch options.
 * @returns FetchResult<IAsset>
 */
const useGetAssetID = <T = Record<string, any>>(
  assetId?: string | null,
  options?: QueryOptions<T>
): FetchResult<IAsset> => {
  const { endpoint, initialData } = options ?? {}

  return useAtomicGetter<IAsset>(
    assetId != null
      ? {
          uri: `/atomciassets/v1/assets/${assetId}`,
          endpoint,
          initialData
        }
      : null
  )
}

export default useGetAssetID

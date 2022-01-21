import { IAsset } from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'
import useAtomicGetter from './useAtomicGetter'

/**
 * Fetch asset by id.
 *
 * @param assetId ID of asset
 * @param endpoint Atomicassets endpoint.
 * @returns FetchResult<IAsset>
 */
const useGetAssetID = (
  assetId?: string | null,
  endpoint?: string
): FetchResult<IAsset> => {
  return useAtomicGetter<IAsset>(
    assetId != null
      ? {
          uri: `/atomciassets/v1/assets/${assetId}`,
          endpoint
        }
      : null
  )
}

export default useGetAssetID

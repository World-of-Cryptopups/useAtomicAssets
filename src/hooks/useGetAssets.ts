import { buildDataOptions } from '../lib/data'
import { DataOptions, IAsset } from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'
import useAtomicGetter from './useAtomicGetter'

interface useGetAssetsProps {
  collection_name?: string
  schema_name?: string
  template_id?: string
  is_transferable?: boolean
  is_burnable?: boolean
  burned?: boolean
  owner?: string
  match?: string
  match_immutable_name?: string
  match_mutable_name?: string
  collection_blacklist?: string
  collection_whitelist?: string
  only_duplicate_templates?: boolean
  has_backed_tokens?: boolean
  authorized_account?: string
  template_whitelist?: string
  template_blacklist?: string
  hide_template_by_accounts?: string
  hide_offers?: string
  ids?: string
  lower_bound?: string
  upper_bound?: string
  before?: number
  after?: number
  page?: number
  limit?: number
  order?: string
  sort?: string
}

/**
 *  Fetch assets.
 *
 * @param props Query options
 * @param data Custom query options for asset / template data fields.
 * @param endpoint Atomicassets endpoint.
 * @returns FetchResult<IAsset[]>
 */
const useGetAssets = (
  props?: useGetAssetsProps | null,
  dataOptions?: DataOptions,
  endpoint?: string
): FetchResult<IAsset[]> => {
  let dOptions: Record<string, any> = {}
  if (dataOptions != null) {
    dOptions = buildDataOptions(dataOptions)
  }

  return useAtomicGetter<IAsset[]>(
    props != null
      ? {
          uri: '/v1/assets',
          params: { ...props, ...dOptions },
          endpoint
        }
      : null
  )
}

export default useGetAssets

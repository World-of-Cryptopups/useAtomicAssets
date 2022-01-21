import { buildDataOptions } from '../lib/data'
import {
  DataOptions,
  DateBoundaryParams,
  GreylistParams,
  HideOffersParams,
  IAsset,
  PrimaryBoundaryParams
} from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'
import {
  BurnableTransferableParams,
  PageLimitOrderParams
} from '../typings/params'
import useAtomicGetter from './useAtomicGetter'

interface useGetAssetsProps
  extends GreylistParams,
    HideOffersParams,
    DateBoundaryParams,
    PrimaryBoundaryParams,
    PageLimitOrderParams,
    BurnableTransferableParams {
  collection_name?: string
  schema_name?: string
  template_id?: string
  burned?: boolean
  owner?: string
  match?: string
  match_immutable_name?: string
  match_mutable_name?: string
  only_duplicate_templates?: boolean
  has_backed_tokens?: boolean
  authorized_account?: string
  template_whitelist?: string
  template_blacklist?: string
  hide_template_by_accounts?: string
  sort?:
    | 'asset_id'
    | 'minted'
    | 'updated'
    | 'transferred'
    | 'template_mint'
    | 'name'
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
          uri: '/atomicassets/v1/assets',
          params: { ...props, ...dOptions },
          endpoint
        }
      : null
  )
}

export default useGetAssets

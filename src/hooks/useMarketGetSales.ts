import { buildDataOptions } from '../lib/data'
import {
  DataOptions,
  DateBoundaryParams,
  GreylistParams,
  PrimaryBoundaryParams
} from '../typings/atomicassets-js'
import { ISales } from '../typings/custom'
import { FetchResult } from '../typings/fetch'
import { PageLimitOrderParams } from '../typings/params'
import useAtomicGetter from './useAtomicGetter'

interface useMarketGetSalesProps
  extends GreylistParams,
    PrimaryBoundaryParams,
    DateBoundaryParams,
    PageLimitOrderParams {
  state?: string
  max_assets?: number
  min_assets?: number
  show_seller_contracts?: boolean
  contract_whitelist?: string
  seller_blacklist?: string
  buyer_blacklist?: string
  asset_id?: number
  marketplace?: string
  maker_marketplace?: string
  taker_marketplace?: string
  symbol?: string
  account?: string
  seller?: string
  buyer?: string
  min_price?: number
  max_price?: number
  min_template_mint?: number
  max_template_mint?: number
  collection_name?: string
  schema_name?: string
  template_id?: number
  is_transferable?: boolean
  is_burnable?: boolean
  burned?: boolean
  owner?: string
  match?: string
  match_immutable_name?: string
  match_mutable_name?: string
  sort?: 'created' | 'updated' | 'sale_id' | 'price' | 'template_mint'
}

/**
 * Get market sales.
 *
 * `/atomicmarket/v1/sales`
 *
 * @param props Query options.
 * @param dataOptions Custom query options for asset / template data fields.
 * @param endpoint Atomicassets endpoint.
 * @returns FetchResult<ISales[]>
 */
const useMarketGetSales = (
  props?: useMarketGetSalesProps | null,
  dataOptions?: DataOptions,
  endpoint?: string
): FetchResult<ISales[]> => {
  let dOptions: Record<string, any> = {}
  if (dataOptions != null) {
    dOptions = buildDataOptions(dataOptions)
  }

  return useAtomicGetter<ISales[]>(
    props != null
      ? {
          uri: '/atomicmarket/v1/sales',
          params: { ...props, ...dOptions },
          endpoint
        }
      : null
  )
}

export default useMarketGetSales

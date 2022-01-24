import {
  DateBoundaryParams,
  GreylistParams,
  ITemplate,
  PrimaryBoundaryParams
} from '../typings/atomicassets-js'
import {
  BurnableTransferableParams,
  PageLimitOrderParams
} from '../typings/params'
import useAtomicGetter from './useAtomicGetter'

interface useGetTemplatesProps
  extends GreylistParams,
    PrimaryBoundaryParams,
    DateBoundaryParams,
    PageLimitOrderParams,
    BurnableTransferableParams {
  collection_name?: string
  schema_name?: string
  issued_supply?: number
  min_issued_supply?: number
  max_issued_supply?: number
  has_assets?: boolean
  max_supply?: number
  authorized_account?: string
  match?: string
  sort?: 'name' | 'created'
}

/**
 * Fetch templates.
 *
 * `/atomicassets/v1/templates`
 *
 * @param props Query options.
 * @param endpoint Atomicassets endpoint.
 * @returns FetchResult<ITemplate[]>
 */
const useGetTemplates = (
  props?: useGetTemplatesProps | null,
  endpoint?: string
) => {
  return useAtomicGetter<ITemplate[]>(
    props != null
      ? { uri: '/atomicassets/v1/templates', params: props, endpoint }
      : null
  )
}

export default useGetTemplates

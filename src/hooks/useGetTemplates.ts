import { ITemplate } from '../typings/atomicassets-js'
import useAtomicGetter from './useAtomicGetter'

interface useGetTemplatesProps {
  collection_name?: string
  schema_name?: string
  issued_supply?: number
  min_issued_supply?: number
  max_issued_supply?: number
  has_assets?: boolean
  max_supply?: number
  is_burnable?: boolean
  is_transferable?: boolean
  authorized_account?: string
  match?: string
  collection_whitelist?: string
  collection_blacklist?: string
  ids?: string
  lower_bound?: string
  upper_bound?: string
  before?: number
  after?: number
  page?: number
  limit?: number
  order?: 'asc' | 'desc'
  sort?: 'name' | 'created'
}

/**
 * Fetch templates.
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

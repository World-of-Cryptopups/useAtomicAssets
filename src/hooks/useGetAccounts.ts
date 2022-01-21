import { IAccountsProps } from '../typings/custom'
import { FetchResult } from '../typings/fetch'
import useAtomicGetter from './useAtomicGetter'

interface useGetAccountsProps {
  match?: string
  collection_name?: string
  schema_name?: string
  template_id?: string
  hide_offers?: boolean
  collection_blacklist?: string
  collection_whitelist?: string
  ids?: string
  lower_bound?: string
  upper_bound?: string
  page?: number
  limit?: number
  order?: 'asc' | 'desc'
}

/**
 * Get accounts which own atomicassets NFTs.
 *
 * @param props Query options.
 * @param endpoint Atomicassets endpoint.
 * @returns FechResult<IAccountsProps>
 */
const useGetAccounts = (
  props?: useGetAccountsProps | null,
  endpoint?: string
): FetchResult<IAccountsProps[]> => {
  return useAtomicGetter<IAccountsProps[]>(
    props != null
      ? { uri: '/atomicassets/v1/accounts', params: props, endpoint }
      : null
  )
}

export default useGetAccounts

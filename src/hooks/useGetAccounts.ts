import {
  GreylistParams,
  HideOffersParams,
  PrimaryBoundaryParams
} from '../typings/atomicassets-js'
import { IAccountsProps } from '../typings/custom'
import { FetchResult } from '../typings/fetch'
import { PageLimitOrderParams } from '../typings/params'
import useAtomicGetter from './useAtomicGetter'

interface useGetAccountsProps
  extends GreylistParams,
    HideOffersParams,
    PrimaryBoundaryParams,
    PageLimitOrderParams {
  match?: string
  collection_name?: string
  schema_name?: string
  template_id?: string
}

/**
 * Get accounts which own atomicassets NFTs.
 *
 * `/atomicassets/v1/accounts`
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

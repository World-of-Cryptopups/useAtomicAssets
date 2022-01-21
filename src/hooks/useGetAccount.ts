import {
  GreylistParams,
  HideOffersParams,
  IAccountStats
} from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'
import useAtomicGetter from './useAtomicGetter'

interface useGetAccountProps extends GreylistParams, HideOffersParams {}

/**
 * Get a specific account stats.
 *
 * @param account Account name.
 * @param props Query options.
 * @param endpoint Atomicassets endpoint.
 * @returns FetchResult<IAccountStats>
 */
const useGetAccount = (
  account?: string | null,
  props?: useGetAccountProps | null,
  endpoint?: string
): FetchResult<IAccountStats> => {
  return useAtomicGetter<IAccountStats>(
    account != null
      ? {
          uri: `/atomicassets/v1/accounts/${account}`,
          params: props ?? undefined,
          endpoint
        }
      : null
  )
}

export default useGetAccount

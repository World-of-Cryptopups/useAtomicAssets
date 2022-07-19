import { QueryOptions } from '../lib/fetcher'
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
 * `/atomicassets/v1/accounts/{accountName}`
 *
 * @param account Account name.
 * @param props Query props.
 * @param options Set custom fetch options.
 * @returns FetchResult<IAccountStats>
 */
const useGetAccount = <T = Record<string, any>>(
  account?: string | null,
  props?: useGetAccountProps | null,
  options?: QueryOptions<T>
): FetchResult<IAccountStats> => {
  const { endpoint, initialData } = options ?? {}

  return useAtomicGetter<IAccountStats>(
    account != null
      ? {
          uri: `/atomicassets/v1/accounts/${account}`,
          params: props ?? undefined,
          endpoint,
          initialData
        }
      : null
  )
}

export default useGetAccount

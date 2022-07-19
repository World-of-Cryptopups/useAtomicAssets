import { QueryOptions } from '../lib/fetcher'
import {
  DateBoundaryParams,
  GreylistParams,
  ISchema,
  PrimaryBoundaryParams
} from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'
import { PageLimitOrderParams } from '../typings/params'
import useAtomicGetter from './useAtomicGetter'

interface useGetSchemasProps
  extends GreylistParams,
    PrimaryBoundaryParams,
    DateBoundaryParams,
    PageLimitOrderParams {
  collection_name?: string
  authorized_account?: string
  schema_name?: string
  match?: string
  sort?: 'created' | 'schema_name'
}

/**
 * Fetch schemas.
 *
 * `/atomicassets/v1/schemas`
 *
 * @param props Query options
 * @param options Set custom fetch options.
 * @returns FetchResult<ISchema[]>
 */
const useGetSchemas = <T = Record<string, any>>(
  props?: useGetSchemasProps | null,
  options?: QueryOptions<T>
): FetchResult<ISchema[]> => {
  const { endpoint, initialData } = options ?? {}

  return useAtomicGetter<ISchema[]>(
    props != null
      ? {
          uri: '/atomicassets/v1/schemas',
          params: props,
          endpoint,
          initialData
        }
      : null
  )
}

export default useGetSchemas

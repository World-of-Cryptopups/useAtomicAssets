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
 * @param endpoint Atomicassets endpoint.
 * @returns FetchResult<ISchema[]>
 */
const useGetSchemas = (
  props?: useGetSchemasProps | null,
  endpoint?: string
): FetchResult<ISchema[]> => {
  return useAtomicGetter<ISchema[]>(
    props != null
      ? { uri: '/atomicassets/v1/schemas', params: props, endpoint }
      : null
  )
}

export default useGetSchemas

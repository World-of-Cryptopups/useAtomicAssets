import { ISchema } from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'
import useAtomicGetter from './useAtomicGetter'

interface useGetSchemasProps {
  collection_name: string
  authorized_account: string
  schema_name: string
  match: string
  collection_blacklist: string
  collection_whitelist: string
  ids: string
  lower_bound: string
  upper_bound: string
  before: number
  after: number
  page: number
  limit: number
  order: 'asc' | 'desc'
  sort: 'created' | 'schema_name'
}

/**
 * Fetch schemas.
 *
 * @param props Queryr options
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

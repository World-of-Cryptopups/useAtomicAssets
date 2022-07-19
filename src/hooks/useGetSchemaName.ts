import { QueryOptions } from '../lib/fetcher'
import { ISchema } from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'
import useAtomicGetter from './useAtomicGetter'

interface useGetSchemaNameProps {
  /**
   * Name of schema.
   */
  schemaName: string
  /**
   * Collection name of schema.
   */
  collectionName: string
}

/**
 * Find schema by its name.
 *
 * `/atomicassets/v1/schemas/{collectionName}/{schemaName}`
 *
 * @param props Path params.
 * @param options Set custom fetch options.
 * @returns FetchResult<ISchema>
 */
const useGetSchemaName = <T = Record<string, any>>(
  props?: useGetSchemaNameProps | null,
  options?: QueryOptions<T>
): FetchResult<ISchema> => {
  const { endpoint, initialData } = options ?? {}

  return useAtomicGetter<ISchema>(
    props != null
      ? {
          uri: `/atomicassets/v1/schemas/${props.collectionName}/${props.schemaName}`,
          endpoint,
          initialData
        }
      : null
  )
}

export default useGetSchemaName

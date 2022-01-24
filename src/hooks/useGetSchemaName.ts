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
 * @param endpoint Atomicassets endpoint.
 * @returns FetchResult<ISchema>
 */
const useGetSchemaName = (
  props?: useGetSchemaNameProps | null,
  endpoint?: string
): FetchResult<ISchema> => {
  return useAtomicGetter<ISchema>(
    props != null
      ? {
          uri: `/atomicassets/v1/schemas/${props.collectionName}/${props.schemaName}`,
          endpoint
        }
      : null
  )
}

export default useGetSchemaName

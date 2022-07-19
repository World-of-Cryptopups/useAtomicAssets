import { QueryOptions } from '../lib/fetcher'
import { ITemplate } from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'
import useAtomicGetter from './useAtomicGetter'

interface useGetTemplateIDProps {
  /**
   * Name of collection.
   */
  collectionName: string
  /**
   * ID of template.
   */
  templateID: number
}

/**
 * Find template by id.
 *
 * `/atomicassets/v1/templates/{collectionName}/{templateID}`
 *
 * @param props Path params.
 * @param options Set custom fetch options.
 * @returns FetchResult<ITemplate>
 */
const useGetTemplateID = <T = Record<string, any>>(
  props?: useGetTemplateIDProps | null,
  options?: QueryOptions<T>
): FetchResult<ITemplate> => {
  const { endpoint, initialData } = options ?? {}

  return useAtomicGetter<ITemplate>(
    props != null
      ? {
          uri: `/atomicassets/v1/templates/${props.collectionName}/${props.templateID}`,
          endpoint,
          initialData
        }
      : null
  )
}

export default useGetTemplateID

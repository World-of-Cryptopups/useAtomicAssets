import { useAtomicGetter } from '.'
import { ITemplate } from '../typings/atomicassets-js'
import { FetchResult } from '../typings/fetch'

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
 * @param props Path params.
 * @param endpoint Atomicassets endpoint.
 * @returns FetchResult<ITemplate>
 */
const useGetTemplateID = (
  props?: useGetTemplateIDProps | null,
  endpoint?: string
): FetchResult<ITemplate> => {
  return useAtomicGetter<ITemplate>(
    props != null
      ? {
          uri: `/atomicassets/v1/templates/${props.collectionName}/${props.templateID}`,
          endpoint
        }
      : null
  )
}

export default useGetTemplateID

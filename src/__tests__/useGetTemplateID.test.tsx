import { renderHook } from '@testing-library/react-hooks'
import useGetTemplateID from '../hooks/useGetTemplateID'
import CustomWrapper from './wrapper'

describe('useGetTemplateID', () => {
  it('should fetch template id', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetTemplateID(
          {
            collectionName: 'farmersworld',
            templateID: 221227
          },
          'https://test.wax.api.atomicassets.io'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.isError)
    expect(result.current.error == null)

    expect(result.current.data?.collection.collection_name === 'farmersworld')
    expect(result.current.data?.template_id === '221227')
  })
})

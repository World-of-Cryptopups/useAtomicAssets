import { renderHook } from '@testing-library/react-hooks'
import useGetCollectionName from '../hooks/useGetCollectionName'
import CustomWrapper from './wrapper'

describe('useGetCollectionName', () => {
  it('should fetch collection name', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetCollectionName(
          'farmersworld',
          'https://test.wax.api.atomicassets.io'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.isError)
    expect(result.current.error == null)

    expect(result.current.data?.collection_name === 'farmersworld')
  })
})

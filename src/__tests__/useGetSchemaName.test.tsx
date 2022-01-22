import { renderHook } from '@testing-library/react-hooks'
import useGetSchemaName from '../hooks/useGetSchemaName'
import CustomWrapper from './wrapper'

describe('useGetSchemaName', () => {
  it('should fetch schema name', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetSchemaName(
          {
            schemaName: 'coin',
            collectionName: 'farmersworld'
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
    expect(result.current.data?.schema_name === 'coin')
  })
})

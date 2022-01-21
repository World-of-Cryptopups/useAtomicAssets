import { renderHook } from '@testing-library/react-hooks'
import useGetSchemas from '../hooks/useGetSchemas'
import CustomWrapper from './wrapper'

describe('useGetSchemas', () => {
  it('should fetch schemas', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGetSchemas({ limit: 3 }, 'https://test.wax.api.atomicassets.io'),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.isError)
    expect(result.current.error == null)

    expect(result.current.data?.length === 3)
  })
})

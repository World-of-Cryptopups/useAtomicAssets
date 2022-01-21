import { renderHook } from '@testing-library/react-hooks'
import { useGetAssets } from '../hooks'
import CustomWrapper from './wrapper'

describe('useGetAssets', () => {
  it('should fetch assets', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetAssets(
          { limit: 3 },
          undefined,
          'https://test.wax.api.atomicassets.io'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.isError)
    expect(result.current.error == null)

    expect(result.current.data?.length === 3)
  })
})

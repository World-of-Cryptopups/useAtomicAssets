import { renderHook } from '@testing-library/react-hooks'
import useGetAssetID from '../hooks/useGetAssetID'
import CustomWrapper from './wrapper'

describe('useGetAssetID', () => {
  it('should fetch asset id', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetAssetID('1099511984292', 'https://test.wax.api.atomicassets.io'),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.isError)
    expect(result.current.error == null)

    expect(result.current.data?.asset_id === '1099511984292')
  })
})

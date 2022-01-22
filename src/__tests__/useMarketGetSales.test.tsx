import { renderHook } from '@testing-library/react-hooks'
import useMarketGetSales from '../hooks/useMarketGetSales'
import CustomWrapper from './wrapper'

describe('useMarketGetSales', () => {
  it('should fetch market slaes', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useMarketGetSales(
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

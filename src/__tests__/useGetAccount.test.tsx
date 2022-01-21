import { renderHook } from '@testing-library/react-hooks'
import useGetAccount from '../hooks/useGetAccount'
import CustomWrapper from './wrapper'

describe('useGetAccount', () => {
  it('should fetch account stats', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetAccount(
          'eosio',
          undefined,
          'https://test.wax.api.atomicassets.io'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.isError)
    expect(result.current.error == null)
  })
})

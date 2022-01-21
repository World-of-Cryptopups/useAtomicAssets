import { renderHook } from '@testing-library/react-hooks'
import useGetAccounts from '../hooks/useGetAccounts'
import CustomWrapper from './wrapper'

describe('useGetAccounts', () => {
  it('should fetch accounts', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetAccounts(
          {
            limit: 3,

            // template_id should exist
            template_id: '12136'
          },
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

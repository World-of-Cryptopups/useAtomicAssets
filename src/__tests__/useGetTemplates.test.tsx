import { renderHook } from '@testing-library/react-hooks'
import useGetTemplates from '../hooks/useGetTemplates'
import CustomWrapper from './wrapper'

describe('useGetTemplates', () => {
  it('should fetch templates', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetTemplates({ limit: 3 }, 'https://test.wax.api.atomicassets.io'),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.isError)
    expect(result.current.error == null)

    expect(result.current.data?.length === 3)
  })
})

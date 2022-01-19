import FetchError from '../lib/error'

export interface FetchResult<T> {
  data?: T
  error?: FetchError
  isError: boolean
}

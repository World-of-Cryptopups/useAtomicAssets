import fetch from 'cross-fetch'
import urljoin from 'url-join'
import FetchError from './error'
import parseParams from './params'

export interface QueryOptions<T> {
  endpoint?: string
  initialData?: T
}

const fetcher = async <T extends Record<string, any> = Record<string, any>>(
  url: string,
  params?: T
) => {
  let finalUrl = url

  if (params != null) {
    finalUrl = urljoin(url, params != null ? '?' + parseParams(params) : '')
  }

  const res = await fetch(finalUrl)

  const data = await res.json()

  if (!res.ok) {
    throw new FetchError(data.message, res.status)
  }

  return data.data
}

export default fetcher

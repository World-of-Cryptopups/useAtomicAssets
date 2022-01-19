import urljoin from 'url-join'
import parseParams from './params'
import fetch from 'cross-fetch'
import FetchError from './error'

const fetcher = async <T extends Record<string, any> = Record<string, any>>(
  url: string,
  params?: T
) => {
  let finalUrl = url

  if (params != null) {
    finalUrl = urljoin(url, '?', parseParams(params))
  }

  const res = await fetch(finalUrl, { method: 'GET' })

  const data = await res.json()

  if (!res.ok) {
    throw new FetchError(data.message, res.status)
  }

  return data
}

export default fetcher

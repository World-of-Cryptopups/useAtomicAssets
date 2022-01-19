/**
 * Custom json / map -> url params parser.
 *
 * @param params T
 * @returns
 */
const parseParams = <T extends Record<string, string>>(params: T): string => {
  return Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    })
    .join('&')
}

export default parseParams

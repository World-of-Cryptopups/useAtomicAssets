import { DataOptions } from '../typings/atomicassets-js'

export function buildDataOptions(data: DataOptions): { [key: string]: any } {
  const dataFields: { [key: string]: string } = {}

  for (const row of data) {
    const dataType = row.type ?? 'data'

    if (typeof row.value === 'number') {
      dataFields[dataType + ':number.' + row.key] = String(row.value)
    } else if (typeof row.value === 'boolean') {
      dataFields[dataType + ':bool.' + row.key] = row.value ? 'true' : 'false'
    } else {
      dataFields[dataType + '.' + row.key] = row.value
    }
  }

  return Object.assign({}, dataFields)
}

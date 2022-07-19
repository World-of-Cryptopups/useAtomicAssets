import { useGetCollectionName } from '@cryptopuppie/useatomicassets'

export default function Component() {
  const { data } = useGetCollectionName('alien.worlds')

  return <p>{JSON.stringify(data)}</p>
}

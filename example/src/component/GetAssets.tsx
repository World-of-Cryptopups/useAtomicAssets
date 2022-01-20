import { useGetAssets } from '@cryptopuppie/useatomicassets'

const GetAssets = () => {
  const { data } = useGetAssets({ owner: 'fckedupmyacc', limit: 5 })

  return (
    <div>
      <h3>My Assets</h3>
      <ul>
        {data?.map((i) => (
          <li key={i.asset_id}>{i.data.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default GetAssets

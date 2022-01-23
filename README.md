# useAtomicAssets

React hooks for fetching data from [AtomicAssets](https://wax.api.atomicassets.io/atomicassets/docs/swagger/) api.

All of the hooks wraps around `useSWR` from the [swr](https://swr.vercel.app) library.

## Install

```sh
npm install --save @cryptopuppie/useatomicassets
```

## Usage

Using the hooks is simple and made to be similar to `useSWR` for easier use.

```jsx
import { useGetAssets } from '@cryptopuppie/useatomicassets'

export default function App() {
  const { data } = useGetAssets(
    { owner: 'fckedupmyacc', limit: 5 },
    'https://test.wax.api.atomicassets.io'
  )

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
```

##

**2022 | World of Cryptopups**

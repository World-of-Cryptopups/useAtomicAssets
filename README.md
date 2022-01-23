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

- **With a Provider**

  If you do not want to set the api everytime in each hook, you can use a provider.

  ```tsx
  // Component.tsx
  import { useGetAssets } from '@cryptopuppie/useatomicassets'

  export default function Component() {
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

  // App.tsx
  import { UseAtomicAssetsProvider } from '@cryptopuppie/useatomicassets'
  import Component from './Component.tsx'

  export default function App() {
    return (
      <UseAtomicAssetsProvider endpoint="https://test.wax.api.atomicassets.io">
        <Component />
      </UseAtomicAssetsProvider>
    )
  }
  ```

- **Error handling**

  All of the hooks export error objects, `error` and `isError`.
  If `isError` is true, the `data` object is null and `error` otherwise.

  ```jsx
  import { useGetAssets } from '@cryptopuppie/useatomicassets'

  export default function App() {
    const { data, isError, error } = useGetAssets(
      { owner: 'fckedupmyacc', limit: 5 },
      'https://test.wax.api.atomicassets.io'
    )

    if (isError) {
      return <p>{error.message}</p>
    }

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

### Hooks

- **useGetAccount** - `/atomicassets/v1/accounts/{accountName}`
- **useGetAccounts** - `/atomicassets/v1/accounts`
- **useGetAssets** - `/atomicassets/v1/assets`
- **useGetAssetID** - `/atomicassets/v1/assets/{assetId}`
- **useGetCollections** - `/atomicassets/v1/collections`
- **useGetCollectionName** - `/atomicassets/v1/collections/{collectionName}`
- **useGetSchemas** - `/atomicassets/v1/schemas`
- **useGetSchemaName** - `/atomicassets/v1/schemas/{collectionName}/{schemaName}`
- **useGetTemplates** - `/atomicassets/v1/templates`
- **useMarketGetSales** - `/atomicmarket/v1/sales`

#### Custom request usage

If you want to fetch data but the hook does not exist, a base hook is made for it.
All of the hooks above use this way.

```tsx
import { useAtomicGetter } from '@cryptopuppie/useatomicassets'

const assetId = 1234

interface CustomResponseType {}

export default function App() {
  const { data } = useAtomicGetter<CustomResponseType>({
    uri: `/atomicassets/v1/assets/{assetId}/stats`,
    endpoint: 'https://test.wax.api.atomicassets.io'
  })

  return <div>{JSON.stringify(data)}</div>
}
```

##

**2022 | World of Cryptopups**

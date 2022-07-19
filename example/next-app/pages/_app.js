import { UseAtomicAssetsProvider } from '@cryptopuppie/useatomicassets'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UseAtomicAssetsProvider endpoint="https://wax.api.atomicassets.io">
      <Component {...pageProps} />
    </UseAtomicAssetsProvider>
  )
}

export default MyApp

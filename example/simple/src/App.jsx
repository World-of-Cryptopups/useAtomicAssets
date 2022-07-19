import { UseAtomicAssetsProvider } from '@cryptopuppie/useatomicassets'
import { useGetCollectionName } from '@cryptopuppie/useatomicassets'
import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import Component from './component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UseAtomicAssetsProvider endpoint="https://wax.api.atomicassets.io">
      <div className="App">
        <Component />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        Test
      </div>
    </UseAtomicAssetsProvider>
  )
}

export default App

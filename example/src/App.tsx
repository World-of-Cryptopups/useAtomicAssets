import { UseAtomicAssetsProvider } from '@cryptopuppie/useatomicassets'
import React from 'react'
import './App.css'
import GetAssets from './component/GetAssets'
import logo from './logo.svg'

function App() {
  return (
    <UseAtomicAssetsProvider endpoint="https://test.wax.api.atomicassets.io">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>


          <GetAssets />
        </header>
      </div>
    </UseAtomicAssetsProvider>
  )
}

export default App

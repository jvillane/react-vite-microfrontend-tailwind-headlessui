

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const envVariable = import.meta.env
  return (
    <>
      <div>
        <div>
          <h1>VITE_PUBLIC_VARIABLE: {envVariable.VITE_PUBLIC_VARIABLE} </h1>
          <h1>PUBLIC_VARIABLE: {envVariable.PUBLIC_VARIABLE} </h1>
          <h1>VITE_SECRET_VARIABLE: {envVariable.VITE_SECRET_VARIABLE} </h1>
          <h1>SECRET_VARIABLE: {envVariable.SECRET_VARIABLE} </h1>
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Root: Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

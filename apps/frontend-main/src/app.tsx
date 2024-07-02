import { useState } from 'react'
import { Header } from '@aiomonitors-spa/frontend-core';
import viteLogo from "../public/vite.svg";
import reactLogo from './assets/react.svg'
import './App.css'

function App(): ReturnType<React.FC> {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Header />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => { setCount((prevCount) => prevCount + 1); }}>
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
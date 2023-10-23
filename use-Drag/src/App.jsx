import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDrag } from '@use-gesture/react'

function App() {

  const [count, setCount] = useState(0)

  const [logoPos, setLogoPos] = useState({ x: 0, y: 0 })

  const moveLogo = useDrag((params) => {
    setLogoPos({
      x: params.offset[0],
      y: params.offset[1],
    })
  })

  return (
    <>
      <div
      >
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img 
          src={reactLogo} 
          className="logo react" 
          alt="React logo" 
          />
      </div>
      <h1>Vite + React</h1>
      <div className="card"
      >
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs"
      {...moveLogo()} 
      style={{
        position: 'relative',
        top: logoPos.y,
        left: logoPos.x,
      }}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

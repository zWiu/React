import { useState } from 'react'
import {animated} from 'react-spring'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCtrlObj from './hooks/useCtrlObj'

function App() {

  const [count, setCount] = useState(0)

  const [logoPos, setLogoPos] = useState({ x: 0, y: 0 })

  const {moveObj, Pos} = useCtrlObj(setLogoPos)

  return (
    <>
      <animated.div
      {...moveObj()}
      style={{
        x: Pos.x,
        y: Pos.y
      }}
      >
          <img src={viteLogo} className="logo" />
          <img src={reactLogo} className="logo react" />
      </animated.div>
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
      <animated.div 
        {...moveObj()}
        style={{
          x: Pos.x,
          y: Pos.y
        }}
      >
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </animated.div>
    </>
  )
}

export default App

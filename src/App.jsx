import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Playground from './pages/Playground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <div className='bg-red-400'> */}
    <Playground/>
  {/* </div> */}
    </>
  )
}

export default App

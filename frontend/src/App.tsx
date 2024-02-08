import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameLists from './componets/GameLists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GameLists/>
    </>
  )
}

export default App

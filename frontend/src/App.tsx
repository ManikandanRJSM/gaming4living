import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameLists from './componets/GameLists'
import Navbar from './componets/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <div className="container layout-container">
    <div className="d-flex p-2">
    <GameLists />
    </div>
    </div>
    
     
    </>
  )
}

export default App

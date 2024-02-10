import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'


import './App.css'
import GameLists from './componets/GameLists'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Streams from './componets/Streams'

function App() {

  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path="/" element={<Streams />}></Route>
    </Routes>
    
        

    <Footer />

    
    
    
     
    </>
  )
}

export default App

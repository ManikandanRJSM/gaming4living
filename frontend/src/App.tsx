import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'


import './App.css'
// import GameLists from './componets/GameLists'
import GameSidebar from './componets/GameSidebar'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Streams from './componets/Streams'
import ViewStream from './componets/ViewStream'
import SiteLoader from './componets/SiteLoader'

function App() {

  return (
    <>
    
    <Navbar />
    <section className="product spad">
      <div className="container">
        <div className="row">
          <Routes>
          
            <Route path="/" element={
              <Fragment>
                <Streams />
                <GameSidebar />
              </Fragment>}>

            </Route>

            <Route path="/stream/:streamer/:id" element={
              <Fragment>
                <ViewStream />
              </Fragment>}>

            </Route>
                  
          </Routes>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default App

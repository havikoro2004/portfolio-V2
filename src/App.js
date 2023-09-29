import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Routes,Route, useLocation,BrowserRouter } from 'react-router-dom'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Particle from './components/Particle';

function App() {
  const location=useLocation()
  return (
    <>
      <Particle />
      <NavBar/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/*' element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
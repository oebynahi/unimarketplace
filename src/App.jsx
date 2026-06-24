import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import './App.css'

function App() {
  return(
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App

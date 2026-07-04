import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import BrowsePage from './pages/browse'
import Login from './pages/login'
import MyListings from './pages/mylistings'
import Signup from './pages/signup'
import CreateListing from './pages/createlisting'
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate} from 'react-router-dom'

function App() {
  const [loginCookie, setLoginCookie] = React.useState(false)

  function handleLogin () {
    setLoginCookie((prevCookie) => !prevCookie)
  }
  
  return(
    <CreateListing />
    // <BrowserRouter>
      
    //   <Routes>
    //     <Route path="/" element={loginCookie ? <BrowsePage /> : <Signup />} />
    //     <Route path="/login-page" element={<Login/>} />
    //     <Route path="/sign-up" element={<Signup />} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App

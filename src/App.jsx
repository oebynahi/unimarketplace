import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import BrowsePage from './pages/browse'
import Login from './pages/login'
import MyListings from './pages/mylistings'
import './App.css'

function App() {
  const [loginCookie, setLoginCookie] = React.useState(true)
  
  return(
        (loginCookie) ? <BrowsePage /> : <Login /> 
    // <MyListings />

  )
}

export default App

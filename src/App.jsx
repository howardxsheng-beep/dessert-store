import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SiteHeader from './pages/SiteHeader'
import MailDist from './pages/MailDist'
import Home from './pages/Home'
import Product from './pages/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SiteHeader/>
      <Product/>
      {/* <Home/> */}
      {/* <MailDist/> */}
    </>
  )
}

export default App

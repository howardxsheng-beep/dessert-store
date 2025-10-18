import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SiteHeader from './pages/SiteHeader'
import MailDist from './pages/MailDist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SiteHeader/>
      {/* <MailDist/> */}
    </>
  )
}

export default App

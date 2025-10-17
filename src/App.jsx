import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SiteHeader from './pages/SiteHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SiteHeader/>
    </>
  )
}

export default App

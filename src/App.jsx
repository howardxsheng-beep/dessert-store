import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SiteHeader from './pages/SiteHeader'
import MailDist from './pages/MailDist'
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Shipping from './pages/Shipping'
import CheckoutSuccess from './pages/CheckoutSuccess'
import Payment from './pages/Payment'
import Invoice from './pages/Invoice'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SiteHeader/> */}
      {/* <Product/> */}
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
      <Shipping/>
      {/* <CheckoutSuccess/> */}
      {/* <Payment/> */}
      {/* <MailDist/> */}
      {/* <Invoice/> */}
    </>
  )
}

export default App

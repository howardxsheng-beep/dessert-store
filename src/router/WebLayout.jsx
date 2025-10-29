import {Routers, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Shipping from './pages/Shipping'
import CheckoutSuccess from './pages/CheckoutSuccess'
import Payment from './pages/Payment'
import Invoice from './pages/Invoice'

 function WebLayout(){
    return(
        <route index element={<Home/>} />

    )
}
export default  WebLayout;
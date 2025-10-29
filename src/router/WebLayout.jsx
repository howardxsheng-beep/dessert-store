import {Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import Shipping from '../pages/Shipping'
import CheckoutSuccess from '../pages/CheckoutSuccess'
import Payment from '../pages/Payment'
import Invoice from '../pages/Invoice'

 function WebLayout(){
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="checkoutSuccess" element={<CheckoutSuccess />} />
            <Route path="payment" element={<Payment />} />
            <Route path="invoice" element={<Invoice />} />
        </Routes>
    )
}
export default  WebLayout;
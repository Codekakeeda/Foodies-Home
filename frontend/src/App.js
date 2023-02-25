import React from 'react'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

// #COMPONENTS
import Home from "./components/home/Home"
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Cart from './components/cart/cart';
import Shipping from './components/cart/shipping';
import ConfirmOrder from './components/cart/confirmOrder';
import PaymentSuccess from './components/cart/paymentSuccess';
import Login from './components/login/login';
import Profile from './components/profile/profile';
import MyOrders from './components/myOrders/myOrders';
import OrderDetails from './components/myOrders/orderDetails';
import Dashboard from './components/admin/dashboard';
import Users from './components/admin/users';
import Orders from './components/admin/orders';
import NotFound from './components/layout/notfound';

// #CSS
import "./styles/app.scss";
import "./styles/home.scss";
import "./styles/header.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/about.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderdetails.scss";
import "./styles/dashboard.scss";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

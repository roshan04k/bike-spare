import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Body/LandingPage';
import Product from './Body/Product';
import ViewPage from './Body/ViewPage';
import Signup from './components/Signup';
import Login from './components/login';  // Updated import to match case
import Payment from './Body/Payment';  // Assuming you added the Payment component
import Data from '../src/json/data.json';
import AdminLogin from '../src/Admin/AdminLogin';  // Import AdminLogin
import AdminDashboard from './Admin/AdminDashboard';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to the cart
  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (!existingItem) {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to handle removing items from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Default route for Login */}
        <Route path="/signup" element={<Signup />} />  {/* Signup Page */}
        <Route path="/main" element={<LandingPage />} />  {/* Landing Page */}
        <Route path="/product" element={<Product items={Data} onAddToCart={addToCart} />} />  {/* Product Page */}
        <Route path="/view" element={<ViewPage cartItems={cartItems} onRemove={removeFromCart} />} />  {/* Cart View Page */}
        <Route path="/payment" element={<Payment />} />  {/* Payment Page */}
        <Route path="/admin" element={<AdminLogin />} />  {/* Admin Login Page */}
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

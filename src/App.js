import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import NewCollections from './Components/NewCollections/NewCollections';
import CheckNow from './Pages/CheckNow';
import Login from './Pages/Login';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import NewPassword from './Pages/NewPassword';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product/>} />
   
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/new-collections" element={<NewCollections />} /> 
          <Route path="/discount-offers" element={<CheckNow />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-Password" element={<ForgotPassword />} />
          <Route path="/new-password" element={<NewPassword />} />

        </Routes>
        <FooterWithConditionalRendering />
      </Router>
    </div>
  );
}

function FooterWithConditionalRendering() {
  const location = useLocation();

  if (location.pathname === '/signup'|| 
  location.pathname === '/login' ||
  location.pathname === '/forgot-password' || 
  location.pathname ==='/new-password') {
    return null;
  }

  return <Footer />;
}

export default App;

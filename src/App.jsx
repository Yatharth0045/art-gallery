/* eslint-disable no-unused-vars */
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Collections from './components/Collections/Collections.jsx';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCart([]);
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/collections"
          element={
            isLoggedIn ? (
              <Collections addToCart={addToCart} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/cart"
          element={
            isLoggedIn ? (
              <Cart cart={cart} clearCart={clearCart} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
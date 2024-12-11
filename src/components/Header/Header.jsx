/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../assets/LoGo.png";

const Header = ({ isLoggedIn, onLogout }) => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="Logo" />
      <p>Artisan Attic</p>
    </div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/collections">Collections</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/cart">Cart</Link>
      {isLoggedIn ? (
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  </header>
);

export default Header;

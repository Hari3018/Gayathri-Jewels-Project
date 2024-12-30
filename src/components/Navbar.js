import React from 'react';
import './Navbar.css'; // Ensure styles are defined in this file

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo-and-icons">
        {/* Logo Section */}
        <div className="logo">
          <img 
            src="/images/logo.png" 
            alt="Gayathri Jewels" 
            className="logo-img" 
          />
        </div>

        {/* Search Bar Section */}
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more..." 
            aria-label="Search" 
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <i className="fa-solid fa-camera camera-icon"></i>
        </div>

        {/* Top Icons Section */}
        <div className="top-icons">
          <a href="#">
            <i className="fa-solid fa-sun festive-icon"></i> FESTIVE
          </a>
          <a href="#">
            <i className="fa-solid fa-user account-icon"></i> ACCOUNT
          </a>
          <a href="#">
            <i className="fa-solid fa-heart wishlist-icon"></i> WISHLIST
          </a>
          <a href="#">
            <i className="fa-solid fa-cart-shopping cart-icon"></i> CART
            <span className="cart-count">0</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

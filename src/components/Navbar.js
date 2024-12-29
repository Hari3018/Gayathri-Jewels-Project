// src/components/Navbar.js

import React from 'react';
import './Navbar.css'; // Make sure you create the corresponding CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src="logo.png" alt="Gayathri Jewels Logo" />
        <span>Gayathri Jewels</span>
      </div>

      {/* Search Bar Section */}
      <div className="search-bar">
        <input type="text" placeholder="Search for Gold Jewellery, Diamond Jewellery and more..." />
        <div className="icons">
          <img src="camera.png" alt="Camera Icon" />
          <img src="mic.png" alt="Mic Icon" />
          <img src="search.png" alt="Search Icon" />
        </div>
      </div>

      {/* Menu Items */}
      <div className="menu">
        <div>
          <img src="gift.png" alt="Festive" />
          <span>FESTIVE</span>
        </div>
        <div>
          <img src="store.png" alt="Stores" />
          <span>STORES</span>
        </div>
        <div>
          <img src="user.png" alt="Account" />
          <span>ACCOUNT</span>
        </div>
        <div>
          <img src="wishlist.png" alt="Wishlist" />
          <span>WISHLIST</span>
        </div>
        <div className="cart">
          <img src="cart.png" alt="Cart" />
          <span>CART</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

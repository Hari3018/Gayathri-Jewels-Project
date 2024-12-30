import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import './Navbar.css'; // Ensure styles are defined in this file

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo-and-icons">
        {/* Logo Section */}
        <div className="logo">
          <img 
            src="/components/logo.jpg" 
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
          <i className="fa-solid fa-camera camera-icon"></i>
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        {/* Top Icons Section */}
        <div className="top-icons">
          <Link to="#"> {/* Changed to Link from anchor tag */}
            <i className="fa-solid fa-sun festive-icon"></i> FESTIVE
          </Link>
          <Link to="#"> {/* Changed to Link from anchor tag */}
            <i className="fa-solid fa-store store-icon"></i> STORES
          </Link>
          <Link to="#"> {/* Changed to Link from anchor tag */}
            <i className="fa-solid fa-user account-icon"></i> ACCOUNT
          </Link>
          <Link to="#"> {/* Changed to Link from anchor tag */}
            <i className="fa-solid fa-heart wishlist-icon"></i> WISHLIST
          </Link>
          <Link to="/cart"> {/* Changed to Link from anchor tag */}
            <i className="fa-solid fa-cart-shopping cart-icon"></i> CART
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navigation-bar">
        <Link to="#">ALL JEWELLERY</Link> {/* Changed to Link */}
        <Link to="#">SILVER</Link> {/* Changed to Link */}
        <Link to="#">GOLD</Link> {/* Changed to Link */}
        <Link to="#">DIAMOND</Link> {/* Changed to Link */}
        <Link to="#">COLLECTIONS</Link> {/* Changed to Link */}
        <Link to="#">WEDDING</Link> {/* Changed to Link */}
        <Link to="#">GIFTING</Link> {/* Changed to Link */}
        <Link to="#">MORE</Link> {/* Changed to Link */}
      </nav>
    </header>
  );
};

export default Navbar;

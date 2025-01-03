import React from 'react';
import { NavLink } from 'react-router-dom';  // Correctly import NavLink
import './Navbar.css'; // Ensure styles are defined in this file

const Navbar = () => {
  return (
    <header className="navbar bg-[#faede5] border-b border-gray-300 font-sans">
      {/* Logo and Icons Section */}
      <div className="logo-and-icons flex items-center justify-between p-4 sm:flex-wrap">
        <div className="logo">
          <img src="logo.jpg" alt="Gayathri Jewels" className="logo-img h-10" />
        </div>

        {/* Search Bar Section */}
        <div className="search-bar flex items-center bg-white border border-gray-300 rounded-md max-w-xl mx-auto p-2 relative">
          <input 
            type="text" 
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more..." 
            aria-label="Search" 
            className="flex-1 border-none outline-none text-gray-700 text-sm p-2" 
          />
          <div className="icons-container flex items-center absolute right-3">
            <i className="fa-solid fa-camera camera-icon text-black text-lg cursor-pointer ml-3"></i>
            <i className="fa-solid fa-magnifying-glass search-icon text-black text-lg cursor-pointer ml-3"></i>
          </div>
        </div>

        {/* Top Icons Section */}
        <div className="top-icons flex items-center gap-6 mt-4 md:mt-0">
          <NavLink to="#" aria-label="Festive Offers" className="text-sm text-gray-700 hover:text-[#daa520] flex items-center">
            <i className="fa-solid fa-sun mr-1"></i> FESTIVE
          </NavLink>
          <NavLink to="#" aria-label="Store Locator" className="text-sm text-gray-700 hover:text-[#daa520] flex items-center">
            <i className="fa-solid fa-store mr-1"></i> STORES
          </NavLink>
          <NavLink to="#" aria-label="Account" className="text-sm text-gray-700 hover:text-[#daa520] flex items-center">
            <i className="fa-solid fa-user mr-1"></i> ACCOUNT
          </NavLink>
          <NavLink to="/products" aria-label="Wishlist" className="text-sm text-gray-700 hover:text-[#daa520] flex items-center">
            <i className="fa-solid fa-heart mr-1"></i> WISHLIST
          </NavLink>
          <NavLink to="/cart" aria-label="Shopping Cart" className="text-sm text-gray-700 hover:text-[#daa520] relative flex items-center">
            <i className="fa-solid fa-cart-shopping mr-1"></i> CART
            <span className="cart-count absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2 py-1">0</span>
          </NavLink>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="navigation-bar bg-white py-2 shadow-sm">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          <NavLink to="/all-jewellery" activeClassName="active-link" className="text-sm text-gray-700 hover:text-[#daa520] px-3">ALL </NavLink>
          <NavLink to="/silver" activeClassName="active-link" className="text-sm text-gray-700 hover:text-[#daa520] px-3">SILVER</NavLink>
          <NavLink to="/gold" activeClassName="active-link" className="text-sm text-gray-700 hover:text-[#daa520] px-3">GOLD</NavLink>
          <NavLink to="/diamond" activeClassName="active-link" className="text-sm text-gray-700 hover:text-[#daa520] px-3">DIAMOND</NavLink>
          <NavLink to="/collections" activeClassName="active-link" className="text-sm text-gray-700 hover:text-[#daa520] px-3">COLLECTIONS</NavLink>
          <NavLink to="/wedding" activeClassName="active-link" className="text-sm text-gray-700 hover:text-[#daa520] px-3">WEDDING</NavLink>
          <NavLink to="/gifting" activeClassName="active-link" className="text-sm text-gray-700 hover:text-[#daa520] px-3">GIFTING</NavLink>
          <NavLink to="/more" activeClassName="active-link" className="text-sm text-gray-700 hover:text-[#daa520] px-3">MORE</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="your-logo.png" alt="Logo" style={styles.logo} /> {/* Replace with your logo */}
      </div>
      
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <NavLink to="/" style={styles.navLink} activeStyle={styles.activeLink}>Home</NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink to="/products" style={styles.navLink} activeStyle={styles.activeLink}>Products</NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink to="/cart" style={styles.navLink} activeStyle={styles.activeLink}>Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

// Styles object for the navbar
const styles = {
  navbar: {
    backgroundColor: '#faede5', // Light background color
    padding: '20px 40px', // Padding for the navbar
    display: 'flex',
    justifyContent: 'space-between', // Space between logo and links
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    height: '50px', // Set your logo height
  },
  navLinks: {
    listStyle: 'none', // Removes bullet points from the list
    display: 'flex',
    gap: '20px', // Space between each navigation item
  },
  navItem: {
    fontSize: '16px', // Font size for navigation items
  },
  navLink: {
    textDecoration: 'none', // Removes underline from links
    color: '#000', // Text color
    fontSize: '16px',
    textTransform: 'uppercase', // Uppercase text for each link
  },
  activeLink: {
    color: '#c49b63', // Active link color (e.g., when clicked)
  },
};

export default Navbar;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} /> {/* Corrected */}
        <Route path="/signup" element={<SignupPage />} /> {/* Corrected */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

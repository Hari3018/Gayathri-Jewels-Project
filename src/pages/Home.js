// src/pages/Home.js

import React from 'react';
import ProductCard from '../components/ProductCard'; // Importing ProductCard Component

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Gayathri Jewels</h1>
      <div className="product-gallery">
        {/* Placeholder Product Cards */}
        <ProductCard title="Gold Necklace" price="₹50000" image="/images/gold-necklace.jpg" />
        <ProductCard title="Diamond Ring" price="₹20000" image="/images/diamond-ring.jpg" />
        <ProductCard title="Silver Bracelet" price="₹15000" image="/images/silver-bracelet.jpg" />
        {/* Add more product cards as needed */}
      </div>
    </div>
  );
};

export default Home;

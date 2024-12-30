// src/pages/Products.js

import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="product-gallery">
        {/* Product listing can be dynamically generated */}
        <ProductCard title="Gold Necklace" price="₹50000" image="/images/gold-necklace.jpg" />
        <ProductCard title="Diamond Ring" price="₹20000" image="/images/diamond-ring.jpg" />
        <ProductCard title="Silver Bracelet" price="₹15000" image="/images/silver-bracelet.jpg" />
        {/* More products can be added */}
      </div>
    </div>
  );
};

export default Products;

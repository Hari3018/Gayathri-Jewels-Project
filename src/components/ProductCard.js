// src/components/ProductCard.js

import React from 'react';

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

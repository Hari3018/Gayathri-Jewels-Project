import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">{price}</p>
    </div>
  );
};

export default ProductCard;

import React from "react";
import axios from "axios";

const ProductCard = ({ title, price, image, productId, userId, emailId }) => {
  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:5000/api/cart", {
        userId,
        emailId,
        productId,
        productName: title,
        price,
        quantity: 1,
      });

      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
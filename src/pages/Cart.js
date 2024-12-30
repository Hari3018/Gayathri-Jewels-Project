// src/pages/Cart.js

import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, title: 'Ring', price: '$200', quantity: 1 },
    { id: 2, title: 'Necklace', price: '$150', quantity: 2 },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

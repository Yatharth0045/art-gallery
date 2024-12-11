import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div>
                <span className="item-title">{item.title}</span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <button className="clear-cart-button" onClick={clearCart}>
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;

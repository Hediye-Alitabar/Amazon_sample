import React from "react";

const Cart = ({ cart }) => {
  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }
  return <div>
    <h2>Carts: </h2>
    {cart.map((item) => (
        <div key={item.id}>
            <h3>{item.name}</h3>
        </div>
    ))}
  </div>;
};

export default Cart;

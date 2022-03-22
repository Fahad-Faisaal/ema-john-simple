import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  return (
    <div>
      <h2 className='summary-title text-center'>Order Summary</h2>
      <p className='cart-text ml-23'>Selected Items: {cart.length}</p>
      <p className='cart-text ml-23'>Total Price: $</p>
      <p className='cart-text ml-23'>Total Shipping Charge: $</p>
      <p className='cart-text ml-23'>Tax: $</p>
      <h5 className='cart-total ml-23'>Grand Total: $</h5>
      <div className='btn-cart-container'>
        <button className='btn-clear btn-order-cart'>Clear Cart</button>
        <button className='btn-review btn-order-cart'>Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
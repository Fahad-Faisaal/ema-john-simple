import React from 'react';
import './Cart.css';

const Cart = ({cart, children}) => {
  let totalPrice = 0;
  let shippingCharge = 0;
  let quantity = 0;

  for(const product of cart){
    quantity += product.quantity; 
    totalPrice += product.price * quantity;
    shippingCharge += product.shipping * quantity;
  }

  const taxAmount = (totalPrice * .15).toFixed(2);

  const grandTotal = (totalPrice + shippingCharge + +taxAmount).toFixed(2);
  
  return (
    <div className='cart'>
      <h2 className='summary-title text-center'>Order Summary</h2>
      <p className='cart-text ml-23'>Selected Items: {quantity}</p>
      <p className='cart-text ml-23'>Total Price: ${totalPrice}</p>
      <p className='cart-text ml-23'>Total Shipping Charge: ${shippingCharge}</p>
      <p className='cart-text ml-23'>Tax: ${taxAmount}</p>
      <h5 className='cart-total ml-23'>Grand Total: ${grandTotal}</h5>
      <div className='btn-cart-container'>
        <button className='btn-clear btn-order-cart'>Clear Cart</button>
        <button className='btn-review btn-order-cart'>{children}</button>
      </div>
    </div>
  );
};

export default Cart;
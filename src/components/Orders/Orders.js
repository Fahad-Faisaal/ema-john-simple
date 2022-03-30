import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import './Orders.css';

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  console.log(cart);

  return (
    <div className='shop-container'>
      <section className="products-container">
        <h1>{cart.length}</h1>
      </section>
      <section className="cart-container">
        <Cart cart={cart} /> 
      </section>
    </div>
  );
};

export default Orders;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const addToCartHandler = product => {
    let newCart = [];
    const exist = cart.find(pd => pd.id === product.id);

    if(!exist){
      product.quantity = 1;
      newCart = [...cart, product];
    }
    else{
      const rest = cart.filter(pd => pd.id !== product.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    
    setCart(newCart);

    addToDb(product.id);
  };

  return (
    <div className='shop-container'>
      <section className="products-container">
        {
          products.map(product => <Product 
               key={product.id} 
               product={product} 
               addToCartHandler={addToCartHandler}
            />)
        }
      </section>
      <section className="cart-container">
        <Cart cart={cart}>
          Review Orders
        </Cart>
      </section>
    </div>
  );
};

export default Shop;
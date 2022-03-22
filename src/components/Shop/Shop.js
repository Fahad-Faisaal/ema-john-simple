import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {

    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(prevState => prevState.length === 0 ? [...data, ...prevState] : prevState));

  }, []);

  const addToCartHandler = product => {
    setCart(prevState => {
      const newCart = [...prevState, product];
      return newCart
    });
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
        <h2>Order Summary</h2>
        <p>Selected Items: {cart.length}</p>
      </section>
    </div>
  );
};

export default Shop;
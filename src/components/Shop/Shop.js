import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(prevState => prevState.length === 0 ? [...data, ...prevState] : prevState));

  }, []);

  return (
    <div className='shop-container'>
      <section className="products-container">
        {
          products.map(product => <Product key={product.id} product={product} />)
        }
      </section>
      <section className="cart-container">
        <h2>Summary here</h2>
      </section>
    </div>
  );
};

export default Shop;
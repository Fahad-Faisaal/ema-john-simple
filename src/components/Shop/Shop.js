import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

  useEffect(() => {
    const storedCart = getStoredCart();

    const savedCart = []
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);

      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }

    setCart(prevState => [...prevState, ...savedCart]);
  }, [products])

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
        <Cart cart={cart} /> 
      </section>
    </div>
  );
};

export default Shop;
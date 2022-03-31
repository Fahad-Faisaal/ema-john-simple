import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const deleteItemHandler = product => {
    const restProducts = cart.filter(pd => pd.id !== product.id);
    setCart(restProducts);
    removeFromDb(product.id);
  }

  return (
    <div className='shop-container'>
      <section className="review-products-container">
        {
          cart.map(product => <ReviewItem 
            key={product.id} 
            product={product}
            deleteItemHandler={deleteItemHandler}
            />)
        }
      </section>
      <section className="cart-container">
        <Cart cart={cart}>
          Proceed to checkout
        </Cart> 
      </section>
    </div>
  );
};

export default Orders;
import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const deleteItemHandler = product => {
    const newCart = cart.filter(pd => pd.id !== product.id);
    setCart(newCart);
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
        <Cart cart={cart} /> 
      </section>
    </div>
  );
};

export default Orders;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
  const {product, addToCartHandler} = props;
  const {img, name, price, seller, ratings, id} = product;

  return (
    <div className='product'>
      <div className='product-image'>
        <img src={img} alt="product" />
      </div>
      <div className='product-detail'>
        <div>
          <h5 className='product-name mb-11'>{name}</h5>
          <h5 className='product-price'>Price: ${price}</h5>
        </div>
        <div className='product-info'>
          <p className='mb-11'>Manufacturer: {seller}</p>
          <p>Rating: {ratings} star</p>
        </div>
      </div>
      <div className='btn-container'>
        <button onClick={() => addToCartHandler(product)} className='btn-cart'><span>Add to Cart</span> <span><FontAwesomeIcon icon={faShoppingCart} /></span></button>
      </div>
    </div>
  );
};

export default Product;
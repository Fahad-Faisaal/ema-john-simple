import React from 'react';
import './Product.css';

const Product = (props) => {
  const {img, name, price, seller, ratings} = props.product;
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
        <button className='btn-cart'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
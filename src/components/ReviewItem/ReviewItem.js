import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product, deleteItemHandler}) => {
  const {name, shipping, quantity, img, price} = product
  return (
    <div className="review-item">
      <div className='review-img'>
        <img src={img} alt="" />
      </div>
      <div className='review-item-details-container'>
        <div className="review-item-details">
          <h1 className='review-item-name' title={name}>{
            name.length > 20 ? name.slice(0, 20) + '...' : name
          }</h1>
          <p className='review-item-text'>
            <span>Price:</span> 
            <span className='review-item-focused'>${price}</span>
          </p>
          <p className='review-item-text'>
            <span>Shipping-charge:</span> 
            <span className='review-item-focused'>${shipping}</span>
          </p>
          <p className="review-item-text">
            <small>quantity: {quantity}</small>
          </p>
        </div>
        <div>
          <div onClick={() => deleteItemHandler(product)} className="btn-delete">
            <FontAwesomeIcon className='icon' icon={faTrashAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
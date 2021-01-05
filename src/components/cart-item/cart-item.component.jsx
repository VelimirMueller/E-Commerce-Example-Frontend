import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-deatails'>
      <span className='name'>{name}</span><br />
      <span className='price new-line'>
        ${price}
      </span><br />
      <span className='quantity'>
        x {quantity}
      </span>
    </div>
  </div>
);

export default CartItem;
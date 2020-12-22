import React from 'react';

import './menu-item.styles.scss';
// eslint-disable-next-line
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-i`}>
    <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
    <div className='cont'>
      <h2 className='title'> { title.toUpperCase() } </h2>
      <span className='subt'> Buy now ! </span>
    </div>
  </div>
);

export default MenuItem;
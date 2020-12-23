import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';
// eslint-disable-next-line
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div 
    className={`${size} menu-i`} 
    onClick={ () => history.push(`${match.url}${linkUrl}`) }
    >
    <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
    <div className='cont'>
      <h2 className='title'> { title.toUpperCase() } </h2>
      <span className='subt'> Buy now ! </span>
    </div>
  </div>
);

export default withRouter(MenuItem);
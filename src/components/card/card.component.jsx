import React from 'react';

import CardInput from '../card-input/card-input.component';

import './card.styles.scss'

const Card = () => (
  <div className='card-wrapper'>
    <div className='card'>
        <CardInput></CardInput>
    </div>
    <div className='card'>
        <CardInput></CardInput>
    </div>
    <div className='card'>
        <CardInput></CardInput>
    </div>
  </div>
);

export default Card;
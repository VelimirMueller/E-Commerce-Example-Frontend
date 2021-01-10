import React from 'react';

import CardInput from '../card-input/card-input.component';

import './card.styles.scss'

const Card = () => (
  <div className='card-wrapper margin-bot-top'>
    <div className='card card1'>
    </div>
    <div className='card card2'>
        <CardInput></CardInput>
    </div>
  </div>
);

export default Card;
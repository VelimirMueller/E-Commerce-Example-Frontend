import React from 'react';
import './hover-headline.styles.scss';

const HoverHeadline = ({textInput, className}) => (
	<div className={className}>
      <h1 textInput={textInput} className='shop-item-text fullwidth'>{textInput}</h1>
  </div>
);

export default HoverHeadline;
import React from 'react';

import './card-input.styles.scss';

const CardInput = () => (
	<div class='card-input'>
		<div className='card-header'>
		<h1>DEMO SHOP</h1>
		</div>
		<div className='card-body'>
		<p>Features of this React App:<br /></p>
		<ul>
			<li>Firebase user authentication</li>
			<li>Stripe payment gateway</li>
			<li>fully responsive</li>
			<li>select item count dynamically on checkout page</li>
			<li>persistant cart</li>
			<li>Figma manipiulated images</li>
			<li>redux</li>
			<li>works on ie 9 ;)</li>
		</ul>
		</div>
		<div className='card-footer'>
		CARD FOOTER
		</div>
	</div>
);

export default CardInput;
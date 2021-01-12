import React from 'react';

import './card-input.styles.scss';

const CardInput = () => (
	<div class='card-input'>
		<div className='card-header'>
		<h3>FEATURES</h3>
		</div>
		<div className='card-body'>
		<ul class="square">
			<li>Firebase user authentication</li>
			<li>Stripe payment gateway</li>
			<li>fully responsive</li>
			<li>persistant cart</li>
			<li>Cookies</li>
		</ul>
		</div>
	</div>
);

export default CardInput;
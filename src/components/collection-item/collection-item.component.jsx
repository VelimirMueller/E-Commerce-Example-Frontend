import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, shortName, price, imageUrl}) => (
    <div className='collection-item'>
			<div
			className='image'
			style={{
				backgroundImage: `url(${imageUrl})`
			}} 
			/>
			<div className='collection-footer'>
				<span className='name'>{ shortName }<br/></span>
				<span className='price'>{ price } $</span>
			</div>
    </div>
);

export default CollectionItem;


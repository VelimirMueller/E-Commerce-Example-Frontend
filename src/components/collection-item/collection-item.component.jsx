import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CollectionItem = ({item, addItem}) => {
	const {shortName, price, imageUrl} = item;
	return(
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
			<CustomButton onClick={() => addItem(item)} inverted>ADD <ShoppingIcon className='shopping-icon'/></CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);


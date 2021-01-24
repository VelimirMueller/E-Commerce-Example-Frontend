import React from 'react';
import {Link} from 'react-router-dom';

import MainMenu from '../../components/main-menu/main-menu.component';
import ButtonSetFocus from '../../components/button-set/button-set-focus/button-set-focus.component';
import ButtonSetFocus2 from '../../components/button-set/button-set-focus2/button-set-focus2.component';
import Card from '../../components/card/card.component';


import { ReactComponent as Logo } from '../../assets/logo.svg';

import './homepage.styles.scss'
import HoverHeadline from '../../components/hover-headline/hover-headline.component';

const HomePage = () => (
  
  <div className='homepage'>
    <div className='banner-image'>
      <div className='fullwidth margin-bot-top banner-title'>
      <Logo className="big-logo"></Logo>
      </div>
      <Link className='option2' to='/shop'>
        	<ButtonSetFocus></ButtonSetFocus>
      </Link>
      <Link className='option2' to='/about'>
        <ButtonSetFocus2></ButtonSetFocus2>
      </Link>
    </div>
    <HoverHeadline className='bg-img-categories' textInput='SHOP CATEGORIES' />
    <MainMenu />
    <HoverHeadline className='bg-img-features' textInput='SHOP FEATURES' />
    <Card />
    
  </div>
 
);

export default HomePage;
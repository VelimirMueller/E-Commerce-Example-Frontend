import React from 'react';
import {Link} from 'react-router-dom';

import MainMenu from '../../components/main-menu/main-menu.component';
import ButtonSetFocus from '../../components/button-set/button-set-focus/button-set-focus.component';
import ButtonSetFocus2 from '../../components/button-set/button-set-focus2/button-set-focus2.component';
import Card from '../../components/card/card.component';


import { ReactComponent as Logo } from '../../assets/logo.svg';

import './homepage.styles.scss'

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
      <Card />
      <MainMenu />
  </div>
 
);

export default HomePage;
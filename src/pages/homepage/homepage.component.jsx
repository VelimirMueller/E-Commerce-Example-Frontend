import React from 'react';
import {Link} from 'react-router-dom';

import MainMenu from '../../components/main-menu/main-menu.component';

import Card from '../../components/card/card.component';
import CardInput from '../../components/card-input/card-input.component';

import './homepage.styles.scss'

const HomePage = () => (
  <div className='homepage'>
    <div className='banner-image'>
      <span className='banner-headline'>FICTION ART SHOP</span>
      <div className='undraw-cart' />
      <Link className='option' to='/shop'>
        <div className='scroll-down-button'>GO 2 SHOP</div>
      </Link>
    </div>
      <Card>
        <CardInput></CardInput>
      </Card>
      <MainMenu />
  </div>
 
);

export default HomePage;
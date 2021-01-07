import React from 'react';
import {Link} from 'react-router-dom';

import MainMenu from '../../components/main-menu/main-menu.component';

import Card from '../../components/card/card.component';


import { ReactComponent as Logo } from '../../assets/logo.svg';

import './homepage.styles.scss'

const HomePage = () => (
  <div className='homepage'>
    <div className='banner-image'>
      <div className='fullwidth margin-bot-top banner-title'>
      <Logo className="big-logo"></Logo>
      </div>
      <Link className='option' to='/shop'>
      <button class="btn draw-border">Draw Border</button>
      </Link>
    </div>
      <Card>
      </Card>
      <MainMenu />
  </div>
 
);

export default HomePage;
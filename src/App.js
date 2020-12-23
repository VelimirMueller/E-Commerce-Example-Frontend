import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'

function App() { //first time tryout of Routing in React, works nice!
  return (
    <div>
      <Switch>
        <Route exact path='/' component= { HomePage } />
        <Route path='/shop' component= {ShopPage} />
      </Switch>
    </div>
  ); 
}

/* Test to see how routing works
const ArtFraktalsPage = () => ( //at the moment no changing states -> just a function instead of a class !
    <div>
      <h2>Fractal Art </h2>
    </div>
);
*/

export default App;

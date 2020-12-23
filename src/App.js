import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

function App() { //first time tryout of Routing in React, works nice!
  return (
    <div>
      <Switch>
        <Route exact path='/' component= { HomePage } />
        <Route path='/fractals/' component= { ArtFraktalsPage} />
        <Route path='/fractals/:id' component= { ArtFraktalsPage} />
      </Switch>
    </div>
  ); 
}

const ArtFraktalsPage = () => ( //at the moment no changing states -> just a function instead of a class !
    <div>
      <h2>Fractal Art </h2>
    </div>
);

export default App;

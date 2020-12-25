import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils'

class App extends React.Component { //first time tryout of Routing in React, works nice!
  constructor(params){
    super(params)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
    <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component= { HomePage } />
        <Route path='/shop' component= {ShopPage} />
        <Route path='/signin' component= { SignInAndSignUpPage } />
        <Route path='/contact' component= { SignInAndSignUpPage } />
      </Switch>
    </div>
  ); 
 }
}

/* Test to see how routing works
const ArtFraktalsPage = () => ( //at the moment no changing states -> just a function instead of a class !
    <div>
      <h2>Fractal Art </h2>
    </div>
);
*/

export default App;

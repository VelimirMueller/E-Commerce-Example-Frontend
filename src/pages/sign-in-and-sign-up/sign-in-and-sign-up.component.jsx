import React from 'react';
import './sign-in-and-sign-up.styles.scss';

// eslint-disable-next-line
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import SmallHeightMaxWidth from '../../components/small-height-max-width/small-height-max-width.component';

const SignInAndSignUpPage = () => (
  <div>
    <SmallHeightMaxWidth className='sign-in-image'>Hello</SmallHeightMaxWidth> 
    <div className="sign-in-and-sign-up">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  </div> 
);

export default SignInAndSignUpPage;
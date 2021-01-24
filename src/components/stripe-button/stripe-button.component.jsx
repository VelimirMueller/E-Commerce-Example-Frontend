import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51ID4QGAsJwcFbsYtUzB5pqORKCaA40LOdH3PJWmlfA5TUt1ZOSW4ylGCueJ0vWoHfUDIZ2aHKdpaaPyFHGisIFMz00n52F5zAw';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return(
    <StripeCheckout className='stripe-checkout'
      label='Pay Now'
      name='VLM Webshops'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
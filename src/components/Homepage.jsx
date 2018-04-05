import React from 'react';
import { connect } from 'react-redux';
import { handleCheckout } from '../actions/actions.js';

const Homepage = (props) => {
  console.log(props);
  return (
    <div>
      <button id='checkout-btn' >Checkout</button>
    </div>
  )
}

export default Homepage;

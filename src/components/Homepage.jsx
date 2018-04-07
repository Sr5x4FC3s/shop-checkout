import React from 'react';
import { connect } from 'react-redux';
import { handleCheckout } from '../actions/actions.js';

const Homepage = (props) => {

  return (
    <div>
      <button id='checkout-btn' onClick={props.handleCheckout}>Checkout</button>
    </div>
  )
}

export default Homepage;

import React from 'react';
import { connect } from 'react-redux';
import { HandleCheckout } from '../actions/actions.js';

const Homepage = (props) => (
  <div>
    <button id='checkout-btn'>Checkout</button>
  </div>
)

export default Homepage;

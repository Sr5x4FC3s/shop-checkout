import React from 'react';
import { connect } from 'react-redux';
import { F2Complete, F2data } from '../actions/actions.js';

const Billing = (props) => (
  <div>
    <p>billing component</p>
    <button id='billing-nxt-btn'>Next</button>
  </div>
)

export default Billing;
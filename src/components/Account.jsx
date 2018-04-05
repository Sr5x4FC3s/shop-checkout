import React from 'react';
import { connect } from 'react-redux';
import { F1Complete, F1data } from '../actions/actions.js';

const Account = (props) => (
  <div>
    <p>account component</p>
    <button id='account-nxt-btn'>Next</button>
  </div>
)

export default Account;
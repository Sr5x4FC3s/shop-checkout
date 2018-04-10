import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { handleCheckout, GoSearch } from '../actions/actions.js';
import { Search } from '../actions/formActions.js';
import { APIget } from '../utility/utility.js';

let Homepage = (props) => {
  const { handleSubmit, reset } = props;

  return (
    <div>
      <h4>Have an Existing Order? Let's Search for It</h4>
      <button id='checkout-search' onClick={props.handleSearch}>Search</button>
      <h4>New Order? Let's Begin The Checkout Process</h4>
      <button id='checkout-btn' onClick={props.handleCheckout}>Checkout</button>
    </div>
  )
}

Homepage = reduxForm({
  form: 'homepage'
})(Homepage)

export default Homepage;
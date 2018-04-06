import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { F2Complete, F2data } from '../actions/actions.js';

let Billing = (props) => {
  const { handleSubmit } = props;

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='address1'>Address-line-1</label>
        <Field name='address1' component='input' type='text' />
      </div>
      <br></br>
      <div>
        <label htmlFor='address2'>Address-line-2</label>
        <Field name='address2' component='input' type='text' />
      </div>
      <br></br>
      <div>
        <label htmlFor='city'>City</label>
        <Field name='city' component='input' type='text' />
      </div>
      <br></br>
      <div>
        <label htmlFor='state'>State</label>
        <Field name='state' component='input' type='text' />
      </div>
      <br></br>
      <div>
        <label htmlFor='zipcode'>ZipCode</label>
        <Field name='zipcode' component='input' type='text' />
      </div>
      <br></br>
    </form>
    <button id='billing-nxt-btn' onClick={props.handleClick}>Next</button>
  </div>
  )
}

Billing = reduxForm({
  form: 'billing'
})(Billing)

export default Billing;
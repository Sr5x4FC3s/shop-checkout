import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { F1Complete, F1data } from '../actions/actions.js';

let Account = (props) => {
  console.log('account', props);
  const { handleSubmit } = props;
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <Field name='firstName' component='input' type='text' />
      </div>
      <br></br>
      <div>
        <label htmlFor='lastName'>Last Name</label>
        <Field name='lastName' component='input' type='text' />
      </div>
      <br></br>
      <div>
        <label htmlFor='password'>Password</label>
        <Field name='password' component='input' type='text' />
      </div>
      <br></br>
      <div>
        <label htmlFor='id'>Custom ID</label>
        <Field name='id' component='input' type='text' />
      </div>
      <br></br>
    </form>
    <button id='account-btn' onClick={props.handleClick}>Next</button>
    </div>
  )
}

Account = reduxForm({
  form: 'account'
})(Account)

export default Account;
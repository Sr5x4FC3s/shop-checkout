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
          <Field name='firstName' component='input' type='text' placeholder='first name...' />
      </div>
      <br></br>
      <div>
        <label htmlFor='lastName'>Last Name</label>
          <Field name='lastName' component='input' type='text' placeholder='last name...' />
      </div>
      <br></br>
      <div>
        <label htmlFor='password'>Password</label>
          <Field name='password' component='input' type='text' placeholder='create password...'/>
      </div>
      <br></br>
      <div>
        <label htmlFor='id'>Custom ID</label>

          <Field name='id' component='input' type='text' placeholder='enter custom ID'/>
      </div>
      <br></br>
      {/* <button id='account-btn' onClick={props.handleSubmit(() => { alert('chee')})}>Next</button> */}
    </form>
    <button id='account-btn' onClick={props.handleClick}>Next</button>
    </div>
  )
}

Account = reduxForm({
  form: 'account'
})(Account)

export default Account;
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { F1Complete, F1data } from '../actions/actions.js';
import { FNinput, LNinput, PWinput, IDinput } from '../actions/formActions.js';

let Account = (props) => {
  const { handleSubmit, reset } = props;
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='firstName'>First Name:</label>
          <Field name='firstName' component='input' type='text' placeholder='first name...' onChange={props.handleFN} value='value'/>
      </div>
      <br></br>
      <div>
        <label htmlFor='lastName'>Last Name:</label>
          <Field name='lastName' component='input' type='text' placeholder='last name...' onChange={props.handleLN} value='value' />
      </div>
      <br></br>
      <div>
        <label htmlFor='password'>Password:</label>
          <Field name='password' component='input' type='text' placeholder='create password...' onChange={props.handlePW} value='value'/>
      </div>
      <br></br>
      <div>
        <label htmlFor='id'>Custom ID:</label>

          <Field name='id' component='input' type='text' placeholder='enter custom ID' onChange={props.handleID} value='value'/>
      </div>
      <br></br>
      {/* <button id='account-btn' onClick={props.handleSubmit(() => { alert('chee')})}>Next</button> */}
    </form>
    <button id='account-btn' onClick={props.handleClick}>Next</button>
    <button id='account-clear' onClick={reset}>Reset</button>
    <button id='account-back'>Back</button>
    </div>
  )
}

Account = reduxForm({
  form: 'account'
})(Account)

export default Account;
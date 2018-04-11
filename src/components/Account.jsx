import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { F1Complete, F1data } from '../actions/actions.js';
import { FNinput, LNinput, PWinput, IDinput } from '../actions/formActions.js';

let Account = (props) => {
  const { handleSubmit, reset } = props;
  const clearCheckpoint = () => {
    let mustBeTrue = true;
    let matchAlphabet = /([A-Za-z -])/gi;
    if (props.firstName.match(matchAlphabet)) {
    } else {
      mustBeTrue = false;
    }
    if (props.lastName.match(matchAlphabet)) {
    } else {
      mustBeTrue = false;
    }
    if (props.password.length > 7) {
    } else {
      mustBeTrue = false;
    }
    if (typeof parseInt(props.id) === 'number') {
      //add condition for a id that already exists in db and ap call...
    } else {
      mustBeTrue = false;
    }
    if (mustBeTrue) {
      props.handleClick();
    } else {
      reset();
    }
  }

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
          <Field name='password' component='input' type='password' placeholder='password length of 7 or more' onChange={props.handlePW} value='value'/>
      </div>
      <br></br>
      <div>
        <label htmlFor='id'>Custom ID:</label>

          <Field name='id' component='input' type='text' placeholder='enter custom ID' onChange={props.handleID} value='value'/>
      </div>
      <br></br>
      {/* <button id='account-btn' onClick={props.handleSubmit(() => { alert('chee')})}>Next</button> */}
    </form>
    <button id='account-btn' onClick={() => { clearCheckpoint() }}>Next</button>
    <button id='account-clear' onClick={reset}>Reset</button>
    <button id='account-back' onClick={props.handleBack}>Back</button>
    </div>
  )
}

Account = reduxForm({
  form: 'account'
})(Account)

export default Account;
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { F1Complete, F1data } from '../actions/actions.js';
import { FNinput, LNinput, PWinput, IDinput } from '../actions/formActions.js';
import { verifyValidID } from '../utility/utility.js';
import { checkFirstName, checkLastName, checkPassword, checkCustomId, validate } from '../utility/validation.js';

let Account = (props) => {
  const { handleSubmit, reset } = props;
  const clearCheckpoint = async () => {
    let check1 = await checkFirstName(props);
    let check2 = await checkLastName(props);
    let check3 = await checkPassword(props);
    let check4 = await checkCustomId(props);
    await validate(props, check1, check2, check3, check4, null);
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
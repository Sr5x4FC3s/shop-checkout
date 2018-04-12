import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { F2Complete } from '../actions/actions.js';
import { L1input, L2input, Cityinput, Stateinput, Zipinput } from '../actions/formActions.js';
import { checkAddress1, checkAddress2, checkCity, checkState, checkZipCode, validate } from '../utility/validation.js';

let Billing = (props) => {
  const { handleSubmit, reset } = props;
  const clearCheckpoint = async () => {
    let check1 = await checkAddress1(props);
    let check2 = await checkAddress2(props);
    let check3 = await checkCity(props);
    let check4 = await checkState(props);
    let check5 = await checkZipCode(props);
    await validate(props, check1, check2, check3, check4, check5);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='address1'>Address-line-1:</label>
        <Field name='address1' component='input' type='text' onChange={props.handleL1} placeholder='Address Line 1...'/>
      </div>
      <br></br>
      <div>
        <label htmlFor='address2'>Address-line-2:</label>
        <Field name='address2' component='input' type='text' onChange={props.handleL2} placeholder='Address Line 2...'/>
      </div>
      <br></br>
      <div>
        <label htmlFor='city'>City:</label>
        <Field name='city' component='input' type='text' onChange={props.handleCity} placeholder='City...'/>
      </div>
      <br></br>
      <div>
        <label htmlFor='state'>State:</label>
        <Field name='state' component='input' type='text' onChange={props.handleState} placeholder='State...'/>
      </div>
      <br></br>
      <div>
        <label htmlFor='zipcode'>Zip Code:</label>
        <Field name='zipcode' component='input' type='text' onChange={props.handleZip} placeholder='Zip Code...'/>
      </div>
      <br></br>
    </form>
    <button id='billing-nxt-btn' onClick={() => { clearCheckpoint() }}>Next</button>
    <button id='billing-clear' onClick={reset}>Reset</button>
    <button id='billing-back' onClick={props.handleBack}>Back</button>
  </div>
  )
}

Billing = reduxForm({
  form: 'billing'
})(Billing)

export default Billing;
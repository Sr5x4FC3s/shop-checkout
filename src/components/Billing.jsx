import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { F2Complete } from '../actions/actions.js';
import { L1input, L2input, Cityinput, Stateinput, Zipinput } from '../actions/formActions.js';

let Billing = (props) => {
  const { handleSubmit, reset } = props;
  const clearCheckpoint = () => {
    let mustBeTrue = true;
    let matchAlphabet = /([A-Za-z /-_,.])/gi;
    if (props.address1.match(matchAlphabet)) {
    } else {
      mustBeTrue = false;
    }
    if (props.address2.match(matchAlphabet)) {
    } else {
      mustBeTrue = false;
    }
    if (props.city.match(matchAlphabet)) {
    } else {
      mustBeTrue = false;
    }
    if (props.state.match(matchAlphabet)) {
    } else {
      mustBeTrue = false;
    }
    if (typeof parseInt(props.zipcode) === 'number' && props.zipcode.length === 5) {
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
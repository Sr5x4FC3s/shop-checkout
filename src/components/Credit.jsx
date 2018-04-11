import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { F3Complete, F3data } from '../actions/actions.js';
import { EXPinput, CCinput, CVVinput, Zip2input } from '../actions/formActions.js';

let Credit = (props) => {
  const { handleSubmit, reset } = props;
  const clearCheckpoint = (props) => {
    let mustBeTrue = true;
    let expirationMatch = /(\d{2}\/\d{4})/gi;
    if ((typeof parseInt(props.credit) === 'number' && props.credit.length === 15) || (typeof parseInt(props.credit) === 'number' && props.credit.length === 16)) {
    } else {
      mustBeTrue = false;
    }
    if (typeof parseInt(props.expiration) === 'number' && props.expiration.toString().match(expirationMatch)) {
    } else {
      mustBeTrue = false;
    }
    if (typeof parseInt(props.cvv) === 'number' && props.cvv.length === 3) {
    } else {
      mustBeTrue = false;
    }
    if (typeof parseInt(props.zipcode2) === 'number' && props.zipcode2.length === 5) {
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
          <label htmlFor='cc'>Credit Card #:</label>
          <Field name='cc' component='input' type='text' onChange={props.handleCC} placeholder='eg. 1234-1234-2334-1234'/>
        </div>
        <br></br>
        <div>
          <label htmlFor='expiration'>Expiration:</label>
          <Field name='expiration' component='input' type='text' onChange={props.handleEXP} placeholder='eg. 09/1999'/>
        </div>
        <br></br>
        <div>
          <label htmlFor='CVV'>CVV:</label>
          <Field name='CVV' component='input' type='text' onChange={props.handleCVV} placeholder='eg. 099'/>
        </div>
        <br></br>
        <div>
          <label htmlFor='zip-code-2'>ZipCode:</label>
          <Field name='zip-code-2' component='input' type='text' onChange={props.handleZip} placeholder='Zip Code...'/>
        </div>
        <br></br>
      </form>
      <button id='credit-nxt-btn' onClick={() => { clearCheckpoint(props) }}>Next</button>
      <button id='credit-clear' onClick={reset}>Reset</button>
      <button id='credit-back' onClick={props.handleBack}>Back</button>
    </div>
  )
}

Credit = reduxForm({
  form: 'credit'
})(Credit)

export default Credit;
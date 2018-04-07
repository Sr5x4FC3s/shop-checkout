import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { F3Complete, F3data } from '../actions/actions.js';
import { EXPinput, CCinput, CVVinput, Zip2input } from '../actions/formActions.js';

let Credit = (props) => {
  const { handleSubmit, reset } = props;
  console.log(props)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='cc'>Credit Card #</label>
          <Field name='cc' component='input' type='text' onChange={props.handleCC} placeholder='Credit Card Info...'/>
        </div>
        <br></br>
        <div>
          <label htmlFor='expiration'>Expiration</label>
          <Field name='expiration' component='input' type='text' onChange={props.handleEXP} placeholder='Expiration...'/>
        </div>
        <br></br>
        <div>
          <label htmlFor='CVV'>CVV</label>
          <Field name='CVV' component='input' type='text' onChange={props.handleCVV} placeholder='CVV...'/>
        </div>
        <br></br>
        <div>
          <label htmlFor='zip-code-2'>ZipCode</label>
          <Field name='zip-code-2' component='input' type='text' onChange={props.handleZip} placeholder='Zip Code...'/>
        </div>
        <br></br>
      </form>
      <button id='credit-nxt-btn' onClick={props.handleClick}>Next</button>
      <button id='credit-clear' onClick={reset}>Reset</button>
      <button id='credit-back'>Back</button>
    </div>
  )
}

Credit = reduxForm({
  form: 'credit'
})(Credit)

export default Credit;
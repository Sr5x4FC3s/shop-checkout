import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { F3Complete, F3data } from '../actions/actions.js';

let Credit = (props) => {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='cc'>Credit Card #</label>
          <Field name='cc' component='input' type='text' />
        </div>
        <br></br>
        <div>
          <label htmlFor='expiration'>Expiration</label>
          <Field name='expiration' component='input' type='text' />
        </div>
        <br></br>
        <div>
          <label htmlFor='CVV'>CVV</label>
          <Field name='CVV' component='input' type='text' />
        </div>
        <br></br>
        <div>
          <label htmlFor='zip-code-2'>ZipCode</label>
          <Field name='zip-code-2' component='input' type='text' />
        </div>
        <br></br>
      </form>
      <button id='credit-nxt-btn' onClick={props.handleClick}>Next</button>
    </div>
  )
}

Credit = reduxForm({
  form: 'credit'
})(Credit)

export default Credit;
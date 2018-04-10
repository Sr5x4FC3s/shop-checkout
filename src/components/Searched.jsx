import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { APIget, stateToArray } from '../utility/utility.js';

let Searched = (props) => {
  const { handleSubmit, reset } = props;
  let infoList = stateToArray(props);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='Searched-search'>Search ID:</label>
          <Field name='search' component='input' type='text' placeholder='search id...'onChange={props.handleSearch}value='value'/>
        </form>
        <button id='searched-submit' onClick={() => { props.searchfunc(props) }}>Search</button>
        <button id='reset-field' onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

Searched = reduxForm({
  form: 'searched'
})(Searched)

export default Searched
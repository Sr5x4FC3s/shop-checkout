import React from 'react';
import { connect } from 'react-redux';
import { stateToArray } from '../utility/utility.js';

const Summary = (props) => {
  let infoList = stateToArray(props);
  console.log(infoList);
  return (
    <div>
      {infoList.map(item => {
        return (<p>{item}</p>);
      })}
    </div>
  )
}

export default Summary;
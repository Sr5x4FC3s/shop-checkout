import React from 'react';
import { stateToArray } from '../utility/utility.js';

const FoundSummary = (props) => {
  let infoList = stateToArray(props.foundItems);
  return (
    <div>
      <h1>Your Summary has been Found, Thanks Again for your Purchase!</h1>
      {infoList.map(item => {
        return (<p key={item}>{item}</p>);
      })}
      <div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  )
};

export default FoundSummary
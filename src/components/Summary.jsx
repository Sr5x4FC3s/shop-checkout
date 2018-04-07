import React from 'react';
import { connect } from 'react-redux';
import { stateToArray } from '../utility/utility.js';
import { APIpost} from '../utility/utility.js';

const Summary = (props) => {
  let infoList = stateToArray(props);
  let APIcall = APIpost(props);
  
  return (
    <div>
      {infoList.map(item => {
        return (<p key={item}>{item}</p>);
      })}
      <div>
        <br></br>
        <br></br>
        <br></br>
        <button id='submit-info' onClick={APIcall} >Submit</button>
      </div>
    </div>
  )
}

export default Summary;
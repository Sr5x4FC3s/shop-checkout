import React from 'react';
import { connect } from 'react-redux';
import { stateToArray } from '../utility/utility.js';
import { APIpost } from '../utility/utility.js';

let Summary = (props) => {
  let infoList = stateToArray(props);
  // let APIcall = APIpost(props);
  const invokeAll = async (props) => {
    await APIpost(props);
    await props.toHomePage();
    await props.reset1();
    await props.reset2();
    await props.reset3();
    await console.log('all done',props);
  }

  return (
    <div>
      {infoList.map(item => {
        return (<p key={item}>{item}</p>);
      })}
      <div>
        <br></br>
        <br></br>
        <br></br>
        <button id='submit-info' onClick={() => { invokeAll(props) }}>Submit</button>
      </div>
    </div>
  )
}

export default Summary;
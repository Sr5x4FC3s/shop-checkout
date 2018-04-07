import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Summary from '../components/Summary.jsx';
import { stateToArray } from '../utility/utility.js';

class SummaryContainer extends React.Component {
  render() {
    return (
      <div>
        <Summary />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    homepage: state.handleCheckout,
    f1complete: state.F1Complete,
    f2complete: state.F2Complete,
    f3complete: state.F3Complete,
    firstName: state.FNinput,
    lastName: state.LNinput,
    password: state.PWinput,
    id: state.IDinput,
    address1: state.L1input,
    address2: state.L2input,
    city: state.Cityinput,
    state: state.Stateinput,
    zipcode: state.Zipinput,
    credit: state.CCinput,
    expiration: state.EXPinput,
    cvv: state.CVVinput,
    zipcode2: state.ZIP2input
  }
};

export default connect(mapStateToProps)(Summary);
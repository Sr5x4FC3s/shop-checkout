import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { handleCheckout, F1complete, F2complete, F3complete } from '../actions/actions.js';
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
    search: state.Search,
    response: state.Response,
    gosearch: state.GoSearch,
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

const mapDispatchToProps = (dispatch) => {
  return {
    toHomePage: (boolean) => { (dispatch(handleCheckout(false))) },
    reset1: (boolean) => { (dispatch(F1complete(false))) },
    reset2: (boolean) => { (dispatch(F2complete(false))) },
    reset3: (boolean) => { (dispatch(F3complete(false))) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
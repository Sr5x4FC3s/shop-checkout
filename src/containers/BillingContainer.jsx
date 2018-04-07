import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { F2complete } from '../actions/actions.js';
import { L1input, L2input, Cityinput, Stateinput, Zipinput } from '../actions/formActions.js';
import Billing from '../components/Billing.jsx';

class BillingContainer extends React.Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <Billing onSubmit={this.submit}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (boolean) => { (dispatch(F2complete(true))) },
    handleL1: (event) => { (dispatch(L1input(event.target.value))) },
    handleL2: (event) => { (dispatch(L2input(event.target.value))) },
    handleCity: (event) => { (dispatch(Cityinput(event.target.value))) },
    handleState: (event) => { (dispatch(Stateinput(event.target.value))) },
    handleZip: (event) => { (dispatch(Zipinput(event.target.value))) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Billing);
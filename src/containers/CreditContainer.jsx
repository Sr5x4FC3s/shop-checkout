import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { F3complete } from '../actions/actions.js';
import { EXPinput, CCinput, CVVinput, Zip2input } from '../actions/formActions.js';
import Credit from '../components/Credit.jsx';

class CreditContainer extends React.Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <Credit onSubmit={this.submit}/>
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
    handleClick: (boolean) => { (dispatch(F3complete(true))) },
    handleCC: (event) => { (dispatch(CCinput(event.target.value))) },
    handleEXP: (event) => { (dispatch(EXPinput(event.target.value))) },
    handleCVV: (event) => { (dispatch(CVVinput(event.target.value))) },
    handleZip: (event) => { (dispatch(Zip2input(event.target.value))) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Credit);
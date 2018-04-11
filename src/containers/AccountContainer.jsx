import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { change, reset } from 'redux-form';
import { handleCheckout, F1complete } from '../actions/actions.js';
import { FNinput, LNinput, PWinput, IDinput } from '../actions/formActions.js';
import Account from '../components/Account.jsx';

class AccountContainer extends React.Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <Account onSubmit={this.submit}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    homepage: state.handleCheckout,
    search: state.Search,
    gosearch: state.GoSearch,
    response: state.Response,
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
    handleClick: (boolean) => {
      (dispatch(F1complete(true))) 
    },
    handleBack: (boolean) => { (dispatch(handleCheckout(false))) },
    handleFN: (event) => { (dispatch(FNinput(event.target.value))) },
    handleLN: (event) => { (dispatch(LNinput(event.target.value))) },
    handlePW: (event) => { (dispatch(PWinput(event.target.value))) },
    handleID: (event) => { (dispatch(IDinput(event.target.value))) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
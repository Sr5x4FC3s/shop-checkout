import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleCheckout } from '../actions/actions.js';
import Homepage from '../components/Homepage.jsx';

class HomepageContainer extends React.Component {
  render() {
    return (
      <div>
        <Homepage />
      </div>
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
    handleCheckout: (boolean) => { dispatch(handleCheckout(true)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
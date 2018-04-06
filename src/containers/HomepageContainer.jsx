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
    f1data: state.F1data,
    f2data: state.F2data,
    f3data: state.F3data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheckout: (boolean) => { dispatch(handleCheckout(boolean)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
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
    f1data: state.F1data,
    f2data: state.F2data,
    f3data: state.F3data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Credit);
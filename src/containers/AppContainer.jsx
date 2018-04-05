import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage.jsx';
import Account from '../components/Account.jsx'
import Billing from '../components/Billing.jsx'
import Credit from '../components/Credit.jsx'
import Summary from '../components/Summary.jsx'

class AppContainer extends React.Component {
  //we can keep state and see if certain fields have been filled with a boolean 
  //use conditional renders when buttons are clicked
  //use redux to store state 
  componentDidMount() {
    //fill in 
    console.log(`this is the state of this app: `, this.props);
  }

  render() {
    //conditional rendering
    if (!this.props.homepage) {
      return (
        <div>
          <h1>Homepage</h1>
          <Homepage />
        </div>
      )
    } else if (this.props.homepage) {
      return (
        <div>
          <h1>Accounting information</h1>
          <Account />
        </div>
      )
    } else if (this.props.f1complete) {
      return (
        <div>
          <h1>Billing information</h1>
          <Billing />
        </div>
      )
    } else if (this.props.f2complete) {
      return (
        <div>
          <h1>Credit Card information</h1>
          <Credit />
        </div>
      )
    } else if (this.props.f3complete) {
      return (
        <div>
          <h1>Summary</h1>
          <Summary />
        </div>
      )
    }
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);


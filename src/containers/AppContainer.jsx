import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import HomepageContainer from './HomepageContainer.jsx';
import AccountContainer from './AccountContainer.jsx'
import BillingContainer  from './BillingContainer.jsx'
import CreditContainer  from './CreditContainer.jsx'
import SummaryContainer  from './SummaryContainer.jsx'

class AppContainer extends React.Component {
  //we can keep state and see if certain fields have been filled with a boolean 
  //use conditional renders when buttons are clicked
  //use redux to store state 
  componentDidMount() {
    //fill in 
    console.log(`this is the state of this app: `, this.props);
  }

  render() {
    let home = this.props.homepage;
    let f1 = this.props.f1complete;
    let f2 = this.props.f2complete;
    let f3 = this.props.f3complete;

    //conditional rendering

    if (!home) {
      return (
        <div>
          <h1>Homepage</h1>
          <HomepageContainer />
        </div>
      )
    } else if (home === true && f1 === false && f2 === false && f3 === false) {
      return (
        <div>
          <h1>Accounting information</h1>
          <AccountContainer />
        </div>
      )
    } else if (home === true && f1 === true && f2 === false && f3 === false) {
      return (
        <div>
          <h1>Billing information</h1>
          <BillingContainer/>
        </div>
      )
    } else if (home === true && f1 === true && f2 === true && f3 === false) {
      return (
        <div>
          <h1>Credit Card information</h1>
          <CreditContainer />
        </div>
      )
    } else if (home === true && f1 === true && f2 === true && f3 === true) {
      return (
        <div>
          <h1>Summary</h1>
          <SummaryContainer />
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

export default connect(mapStateToProps)(AppContainer);


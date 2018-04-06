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
    console.log(home);
    let f1 = this.props.f1complete;
    let f2 = this.props.f2complete;
    let f3 = this.props.f3complete;

    //conditional rendering
    if (!home) {
      console.log(home);
      console.log(f1);
      return (
        <div>
          <h1>Homepage</h1>
          <HomepageContainer />
        </div>
      )
    } else if (home) {
      console.log('hey', this.props.homepage, f1)
      return (
        <div>
          <h1>Accounting information</h1>
          <AccountContainer />
        </div>
      )
    } else if (home && f1) {
      return (
        <div>
          <h1>Billing information</h1>
          <BillingContainer/>
        </div>
      )
    } else if (home && f1 && f2) {
      return (
        <div>
          <h1>Credit Card information</h1>
          <CreditContainer />
        </div>
      )
    } else if (home && f1 && f2 && f3) {
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


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
    return (
      <div>
        <h1>Let's go shopping now, breh</h1>
        <Homepage />
        <Account />
        <Billing />
        <Credit />
        <Summary />
      </div>
    )
  }
};

const mapToState = (state) => {
  return {
    homepage: state.Homepage,
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

export default connect(mapDispatchToProps, mapDispatchToProps)(AppContainer);


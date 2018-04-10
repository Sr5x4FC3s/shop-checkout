import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import HomepageContainer from './HomepageContainer.jsx';
import AccountContainer from './AccountContainer.jsx';
import BillingContainer from './BillingContainer.jsx';
import CreditContainer from './CreditContainer.jsx';
import SummaryContainer from './SummaryContainer.jsx';
import SearchedContainer from  './SearchedContainer.jsx';
import FoundSummary from '../components/FoundSummary.jsx';
import { APIget } from '../utility/utility.js';

class AppContainer extends React.Component {
  constructor() {
    super();

    this.state = {searchedData: {}, found: false};
  }

  searchInfo(props) {
    let asyncFunction = async (props) => {
      let data = await APIget(props);
      await this.setState({
        searchedData: data,
        found: true
      });
    }
    asyncFunction(props);
  }

  render() {
    let home = this.props.homepage;
    let gosearch = this.props.gosearch;
    let f1 = this.props.f1complete;
    let f2 = this.props.f2complete;
    let f3 = this.props.f3complete;
    let found = this.state.found;

    //conditional rendering
    if (!home && !gosearch) {
      return (
        <div>
          <h1>Homepage</h1>
          <HomepageContainer />
        </div>
      )
    } else if (gosearch === true && found === false) {
      return (
        <div>
          <h1>Searching for Account</h1>
          <SearchedContainer data={this.state} searchfunc={this.searchInfo.bind(this)}/>
        </div>
      )
    } else if (gosearch ===  true && found === true) {
      return (
        <div>
          <h1>Account is found!</h1>
          <FoundSummary foundItems={this.state.searchedData}/>
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
    search: state.Search,
    response: state.Response,
    gosearch: state.GoSearch,
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


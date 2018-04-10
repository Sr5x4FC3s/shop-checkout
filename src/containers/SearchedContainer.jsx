import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Searched from '../components/Searched.jsx';
import { Search } from '../actions/formActions.js';
import { stateToArray } from '../utility/utility.js';


class SearchedContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Searched data={props} searchfunc={props.searchfunc} />
      </div>
    )
  }
}

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

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (event) => { dispatch(Search(event.target.value)) },
    Response: (object) => { dispatch(Search(props.response)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Searched);
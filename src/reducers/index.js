import { combineReducers } from 'redux';
import { handleCheckout, F1Complete, F2Complete, F3Complete, F1data, F2data, F3data } from './reducers.js';

export default combineReducers({
  handleCheckout,
  F1Complete, 
  F2Complete,
  F3Complete, 
  F1data,
  F2data,
  F3data
});
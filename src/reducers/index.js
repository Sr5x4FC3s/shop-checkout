import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { handleCheckout, F1Complete, F2Complete, F3Complete, F1data, F2data, F3data } from './reducers.js';
import { FNinput, LNinput, PWinput, IDinput, L1input, L2input, Cityinput, Stateinput, Zipinput, CCinput, EXPinput, CVVinput, ZIP2input } from './inputReducers.js';

export default combineReducers({
  handleCheckout,
  F1Complete, 
  F2Complete,
  F3Complete, 
  F1data,
  F2data,
  F3data,
  FNinput,
  LNinput,
  PWinput,
  IDinput,
  L1input,
  L2input, 
  Cityinput,
  Stateinput,
  Zipinput,
  CCinput,
  EXPinput, 
  CVVinput, 
  ZIP2input,
  form: formReducer
});
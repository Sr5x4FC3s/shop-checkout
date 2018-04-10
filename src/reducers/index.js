import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { handleCheckout, F1Complete, F2Complete, F3Complete, GoSearch, Response } from './reducers.js';
import { FNinput, LNinput, PWinput, IDinput, L1input, L2input, Cityinput, Stateinput, Zipinput, CCinput, EXPinput, CVVinput, ZIP2input, Search } from './inputReducers.js';

export default combineReducers({
  handleCheckout,
  GoSearch,
  Response,
  F1Complete, 
  F2Complete,
  F3Complete, 
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
  Search,
  form: formReducer
});
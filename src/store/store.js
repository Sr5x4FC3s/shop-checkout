import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js';

const configureStore = (initialState) => {
  return createStore(
    rootReducer, 
    initialState,
    applyMiddleware(thunk)
  );
}

export default configureStore;
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import setupReducer from './setup';

export default combineReducers({
  setup: setupReducer,
  routing: routerReducer
});

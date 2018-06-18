import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import setupReducer, { setupKey } from './setup';
import boardReducer, { boardKey } from './board';

export default combineReducers({
  [setupKey]: setupReducer,
  [boardKey]: boardReducer,
  routing: routerReducer
});

import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';
// import { composeWithDevTools } from 'redux-devtools-extension';

const storeStateMiddleware = storageKey => store => next => action => {
  const result = next(action);
  const { board, setup } = store.getState();
  localStorage.setItem(storageKey, JSON.stringify({ board, setup }, null, 2)); // 2 to pprint
  return result;
};

const inDev = process.env.NODE_ENV === 'development';

export const history = createHistory(
  inDev ? {} : { basename: '/minesweeper/' }
);

const initialState = {};
const enhancers = [];
const middleware = [
  routerMiddleware(history),
  storeStateMiddleware('minesweeper')
];

if (inDev) {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);

export default store;

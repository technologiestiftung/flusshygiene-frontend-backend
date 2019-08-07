import throttle from 'lodash.throttle';
import { applyMiddleware, compose, createStore } from 'redux';
import { loadState, saveState } from './lib/local-storage';
import middleware from './lib/middleware';
import reducers from './lib/root-reducer';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(middleware)),
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000),
);

export default store;

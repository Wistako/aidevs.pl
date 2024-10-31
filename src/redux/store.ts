import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Middleware,
} from 'redux';
import countReducer from './reducers/countReducer';
import { thunk } from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  count: countReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk as unknown as Middleware),
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ) as any,
);

export default store;

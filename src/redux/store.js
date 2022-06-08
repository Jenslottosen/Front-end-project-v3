import thunk from "redux-thunk";
import allReducers from ".";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

const midelwares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(...midelwares))
);

export default store;

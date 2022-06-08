import countriesReducer from "./countriesReducer";
import countryReducer from "./countryReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  countriesData: countriesReducer,
  countryData: countryReducer,
});

export default allReducers;

import partyReducer from "./partyReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  party: partyReducer,
});

export default allReducers;

import partyReducer from "./partyReducer";
import addedCountReducer from "./addedCountReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  party: partyReducer,
  count: addedCountReducer,
});

export default allReducers;

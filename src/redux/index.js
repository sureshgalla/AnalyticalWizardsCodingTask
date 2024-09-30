import { combineReducers } from "redux";
import { workflowReducer, tableHeadersReducer } from "./reducer";

const rootReducer = combineReducers({
  workflow: workflowReducer,
  tableHeaders: tableHeadersReducer,
});

export default rootReducer;

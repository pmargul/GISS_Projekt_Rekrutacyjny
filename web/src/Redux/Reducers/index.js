import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import systemReducer from "./systemReducer";
import alertReducer from "./alertReducer";

const createRootReduccer = history =>
  combineReducers({
    router: connectRouter(history),
    system: systemReducer,
    alert: alertReducer,
    form: formReducer,

  });

export default createRootReduccer;

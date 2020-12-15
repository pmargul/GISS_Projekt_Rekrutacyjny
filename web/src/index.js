import React from "react";
import ReactDOM from "react-dom";
import "./System/System.css"
import 'react-widgets/dist/css/react-widgets.css';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./Redux/configureStore";
import moment from "moment";
import momentLocalizer from "react-widgets-moment";
import "moment/locale/pl";
import App from "./App";

const store = configureStore();
momentLocalizer(moment.locale("pl"));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

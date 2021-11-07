import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    count: store.getState().count,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

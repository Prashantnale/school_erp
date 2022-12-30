import React from "react";
import ReactDOM from "react-dom/client";
// import Home from "./Demo/Reducers/Home";
import { Provider } from "react-redux";
import store from "./States/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

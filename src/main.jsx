import React from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./services/store";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

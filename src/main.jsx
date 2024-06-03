import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

import "../I18next.js";
import App from "./App.jsx";

import "primereact/resources/themes/tailwind-light/theme.css";
import "./assets/Styles/global/style.scss";
import { Provider } from "react-redux";

import Store from "../Store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <PrimeReactProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>
);

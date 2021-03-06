import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App.js";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const domain= process.env.DOMAIN;
const clientId= process.env.CLIENTID;



ReactDOM.render(
  <Auth0Provider
    domain = {domain}
    clientId = {clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

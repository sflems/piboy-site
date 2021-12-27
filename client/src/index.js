import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.scss";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App className="app flex-grow-1" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import Usuarios from "./pages/usuariosPage";
ReactDOM.render(
    <React.StrictMode>
    
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);


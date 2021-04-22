import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import UserProvider from "./utility/context/UserContext";

axios.defaults.baseURL = "https://react-express-clothes.herokuapp.com/";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

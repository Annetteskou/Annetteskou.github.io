
import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./main.css";
import { StrictMode } from "react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

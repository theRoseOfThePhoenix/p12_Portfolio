/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Footer from "./components/footer/footer.jsx";
import "./index.css";
import "./styles/Main.scss/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);

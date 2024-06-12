import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";
// import ErrorBoundary from "./Error_Boundry/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    {/* <ErrorBoundary> */}
    <App />
    {/* </ErrorBoundary> */}
  </AuthProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProvider from "./components/context/AppProvider";
import AuthProvider from "./components/context/AuthProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>
);

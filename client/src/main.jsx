import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TrasactionProvider } from "./context/TransactionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TrasactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TrasactionProvider>
);

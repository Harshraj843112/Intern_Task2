import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ErrorBoundary from "./ErrorBoundary"; // Import your ErrorBoundary component
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary>
    {" "}
    {/* Wrap your entire app with ErrorBoundary */}
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>
);

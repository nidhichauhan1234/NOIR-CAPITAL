import "./app.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes"; // ✅ make sure this file exists and exports the router


const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ must match index.html

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

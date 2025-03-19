// index.jsx (or index.js)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/common.css";
import "../assets/css/main.css";
import "../assets/css/responsive.css";

// Components
import Login from "./components/Login";
import App from "./App.jsx";
import Registration from "./components/Registration";

// Define the routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/success" element={<App />} />
      <Route path="/reg" element={<Registration />} />
    </>
  )
);

// Render the app with the router
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

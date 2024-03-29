import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "about",
    element: <About />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

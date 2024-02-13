import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { NotFound } from "./components/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "resume/create",
    element: <div>Resume Form</div>,
  },
  {
    path: "resume/preview",
    element: <div>Resume Preview</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);

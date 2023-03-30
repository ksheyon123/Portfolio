import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Router } from "react-router-dom";
import { router } from "@src/Router";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Router } from "react-router-dom";
import { router } from "@src/Router";
import { Layout } from "@src/Components";
import { AnimatedRoutes } from "./AnimatedRoutes";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Layout>
    <RouterProvider router={router} />
  </Layout>,
)

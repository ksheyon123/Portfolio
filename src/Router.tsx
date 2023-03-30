import { createBrowserRouter } from "react-router-dom";
import { Home, Job } from "@src/Pages/";
import { Layout } from "@src/Components";
import { AnimatedRoutes } from "./AnimatedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Layout>
        <AnimatedRoutes />
      </Layout>,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "job",
        element: <Job />
      }
    ]
  },
  {
    path: "/*",
    element: <></>
  }
]);

export { router } 
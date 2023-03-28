import { createBrowserRouter } from "react-router-dom";
import { Home, Job } from "@src/Pages/";
import { AnimatedRoutes } from "./AnimatedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <AnimatedRoutes>
      </AnimatedRoutes>,
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
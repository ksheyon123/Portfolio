import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, Job, Work } from "@src/Pages/";
import { AnimatedRoutes } from "./AnimatedRoutes";
import { AnimatedWrapper } from "./AnimatedWrapper";

const Router = createBrowserRouter([
  {
    element:
      <AnimatedRoutes />,
    children: [
      {
        index: true,
        path: "home",
        element:
          <AnimatedWrapper>
            <Home />
          </AnimatedWrapper>
      },
      {
        path: "job",
        element:
          <AnimatedWrapper>
            <Job />
          </AnimatedWrapper>
      },
      {
        path: "work",
        element:
          <AnimatedWrapper>
            <Work />
          </AnimatedWrapper>,
      },
      {
        path: "contact",
        element:
          <AnimatedWrapper>
            <Job />
          </AnimatedWrapper>
      }
    ]
  },
  {
    path: "/*",
    element: <Navigate to={"home"} />
  }
]);

export { Router } 
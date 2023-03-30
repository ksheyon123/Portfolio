import { createBrowserRouter } from "react-router-dom";
import { Home, Job } from "@src/Pages/";
import { AnimatedRoutes } from "./AnimatedRoutes";
import { AnimatedWrapper } from "./AnimatedWrapper";

const router = createBrowserRouter([
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
            <Job />
          </AnimatedWrapper>
      }
    ]
  },
  {
    path: "/*",
    element: <></>
  }
]);

export { router } 
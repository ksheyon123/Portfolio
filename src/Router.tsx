import { createBrowserRouter } from "react-router-dom";
import { Home, Job, Work, WorkDetail } from "@src/Pages/";
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
            <Work />
          </AnimatedWrapper>,
      },
      {
        path: "detail/:id",
        element: <WorkDetail />
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
    element: <></>
  }
]);

export { router } 
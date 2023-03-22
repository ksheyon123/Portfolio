import { createBrowserRouter } from "react-router-dom";
import { Home } from "@src/Pages/";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/*",
    element: <></>
  }
]);

export { router } 
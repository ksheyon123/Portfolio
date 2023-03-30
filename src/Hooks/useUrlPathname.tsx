import { useLocation } from "react-router-dom";

export const useUrlPathname = () => {
  const { pathname } = useLocation();
  const path = pathname.replace("/", "");
  return {
    path
  }
}
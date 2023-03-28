import React, { ReactNode } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

const AnimatedRoutes: React.FC<IProps> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="animated w-full h-full" onWheel={(e) => {
      console.log(e.deltaY)
      if (e.deltaY > 0) {
        navigate("/job")
      }
    }}>
      <Outlet />
    </div>
  )
}

export { AnimatedRoutes }
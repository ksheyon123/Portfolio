import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AnimatedRoutes: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="animated w-full h-full">
      <Outlet />
    </div>
  )
}

export { AnimatedRoutes }
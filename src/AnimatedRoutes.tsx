import React from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes: React.FC = () => {
  return (
    <div className="animated w-full h-full">
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </div>
  )
}

export { AnimatedRoutes }
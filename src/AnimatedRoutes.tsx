import React from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedRoutes: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-full"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}

export { AnimatedRoutes }
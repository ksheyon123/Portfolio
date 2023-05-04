import React from "react";
import { useOutlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Layout } from "@src/Components";

const AnimatedRoutes = () => {
  const { pathname } = useLocation();
  const element = useOutlet();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {element && React.cloneElement(element, { key: pathname })}
      </AnimatePresence>
    </Layout>
  )
}

export { AnimatedRoutes }
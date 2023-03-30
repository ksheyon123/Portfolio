import React, { ReactNode } from "react";
import { motion } from "framer-motion";
interface IProps {
  children: ReactNode;
}
const sections = {
  hidden: {
    y: '-100%',
    opacity: 0.3
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '100%',
    opacity: 0.3,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

export const AnimatedWrapper: React.FC<IProps> = ({ children }) => {

  return (
    <motion.div
      variants={sections}
      className="w-full h-full"
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
    ;
};
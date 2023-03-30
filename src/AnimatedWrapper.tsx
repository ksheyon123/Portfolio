import React, { ReactNode } from "react";
import { motion } from "framer-motion";
interface IProps {
  children: ReactNode;
}
const sections = {
  hidden: {
    y: '-100%',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    y: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
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
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay: number;
  duration: number;
};

export const AnimateBox = ({ children, duration, delay }: Props) => {
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: duration, delay: delay },
    },
    hidden: { opacity: 0, scale: 0, x: -100 },
  };

  return (
    <motion.div
      className="w-full flex items-center justify-center flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

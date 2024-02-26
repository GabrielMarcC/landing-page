"use client";

import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  delay: number;
  duration: number;
};

export const ContainerContent = ({ children, duration, delay }: Props) => {
  const control = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: duration, delay: delay },
    },
    hidden: { opacity: 1, scale: 0, x: 200 },
  };

  return (
    <motion.div
      className="w-full flex items-center justify-center flex-col"
      ref={ref}
      initial="hidden"
      animate={control}
      variants={variants}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  delay: number;
  duration: number;
};

export const ContainerContent = ({ children, duration, delay }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          setIsVisible(true);
        }
      });
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <motion.div
      className="w-full flex items-center justify-center flex-col"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div ref={elementRef} className="w-full">{isVisible && children}</div>
    </motion.div>
  );
};

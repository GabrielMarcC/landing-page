"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimateWords = () => {
  const [words] = useState(["arquitetura", "sustentabilidade", "design"]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full flex justify-center text-center items-center h-9">
        <AnimatePresence>
          {words.map(
            (word, index) =>
              index === currentWordIndex && (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 w-full p-4"
                  initial={{ translateY: "100%" }}
                  animate={{ translateY: "0%" }}
                  exit={{ translateY: "-100%", transition: { duration: 0.1 } }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-4xl lg:text-[40px] text-gold border-b-2 font-bold border-gold w-full animate-pulse">
                    {word}
                  </span>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

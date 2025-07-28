"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function MainContent({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document.body.classList.contains("loaded")) {
      setIsLoaded(true);
    } else {
      const timeout = setTimeout(() => {
        document.body.classList.add("loaded");
        setIsLoaded(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          className="main-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
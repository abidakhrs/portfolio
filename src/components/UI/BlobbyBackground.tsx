import { motion } from "motion/react";
import React from "react";

interface BlobbyBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const BlobbyBackground: React.FC<BlobbyBackgroundProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative overflow-hidden min-h-screen ${className}`}>
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-2xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BlobbyBackground;

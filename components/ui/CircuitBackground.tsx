"use client";

import { motion } from "framer-motion";

export default function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Soft semiconductor glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-200/40
          blur-3xl
        "
      />


      {/* Circuit grid */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          opacity-30
          bg-[linear-gradient(90deg,transparent_95%,#3b82f6_100%)]
          bg-[length:80px_80px]
        "
      />


      {/* Floating node */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-24
          top-40
          h-3
          w-3
          rounded-full
          bg-blue-600
        "
      />


      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-32
          bottom-40
          h-3
          w-3
          rounded-full
          bg-emerald-500
        "
      />

    </div>
  );
}
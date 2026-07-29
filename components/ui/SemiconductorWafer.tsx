"use client";

import { motion } from "framer-motion";

export default function SemiconductorWafer() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 360,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-slate-100 via-blue-100 to-blue-600 shadow-2xl"
    >
      {/* Outer ring */}
      <div className="absolute inset-3 rounded-full border border-white/50" />

      {/* Reflection */}
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-white/30 blur-xl" />

      {/* Die grid */}
      <div className="grid grid-cols-4 gap-3 rounded-xl bg-white/10 p-8 backdrop-blur-sm">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="h-8 w-8 rounded-sm border border-white/40 bg-blue-700/40"
          />
        ))}
      </div>

      {/* Centre branding */}
      <div className="absolute rounded-full bg-blue-900/70 px-5 py-3 text-3xl font-bold text-white shadow-lg">
        QSi
      </div>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

export default function SiliconWafer() {
  return <h1 className="text-6xl text-red-600">TEST</h1>;
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
      className="h-64 w-64 rounded-full bg-blue-600"
    />
  );
}
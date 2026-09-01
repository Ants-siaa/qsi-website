"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SemiconductorWafer() {
  return (
    <div className="relative aspect-square w-full max-w-[600px]">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 52,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Image
          src="/images/wafer/qsi-wafer-master-v1.png"
          alt="QSI semiconductor wafer"
          fill
          priority
          className="object-contain"
          sizes="(min-width: 1024px) 600px, 90vw"
        />
      </motion.div>
    </div>
  );
}
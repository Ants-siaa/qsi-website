"use client";

import { motion } from "framer-motion";

interface CircleCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function CircleCard({
  title,
  description,
  icon,
}: CircleCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        rounded-3xl
        bg-white
        p-8
        text-center
        shadow-lg
        border
        border-gray-100
      "
    >

      <div
        className="
          mx-auto
          mb-6
          flex
          h-36
          w-36
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-600
          to-emerald-400
          text-5xl
          shadow-xl
          transition
          hover:scale-105
        "
      >
        {icon}
      </div>


      <h3 className="text-xl font-bold text-blue-950">
        {title}
      </h3>


      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

    </motion.div>
  );
}
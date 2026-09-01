"use client";

import { motion } from "framer-motion";

export default function WaferReflection() {
  return (
    <g clipPath="url(#waferClip)">
      {/* Broad animated cleanroom light */}
      <motion.rect
        x="-310"
        y="-80"
        width="620"
        height="95"
        rx="48"
        fill="url(#cleanroomSweep)"
        transform="rotate(-24)"
        initial={{ x: -180, opacity: 0 }}
        animate={{
          x: [-180, 180],
          opacity: [0, 0.46, 0.46, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatDelay: 3,
          ease: [0.42, 0, 0.58, 1],
        }}
      />

      {/* Upper optical highlight */}
      <ellipse
        cx="-78"
        cy="-92"
        rx="112"
        ry="48"
        fill="url(#edgeHighlight)"
        transform="rotate(-22)"
        opacity="0.34"
      />

      {/* Secondary lower reflection */}
      <motion.ellipse
        cx="92"
        cy="86"
        rx="72"
        ry="24"
        fill="#dff7ff"
        animate={{
          opacity: [0.025, 0.1, 0.025],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
        style={{ transformOrigin: "92px 86px" }}
      />

      {/* Thin edge shine */}
      <path
        d="M -150 -94
           C -82 -180, 72 -200, 151 -94"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.22"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </g>
  );
}
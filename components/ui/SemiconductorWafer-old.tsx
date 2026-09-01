"use client";

import { motion } from "framer-motion";

import QSILogoEtch from "./QSILogoEtch";
import WaferDefs from "./WaferDefs";
import WaferGrid from "./WaferGrid";
import WaferMarks from "./WaferMarks";
import WaferReflection from "./WaferReflection";

export default function SemiconductorWafer() {
  return (
   <div className="relative aspect-square w-full max-w-[600px]">
    <div className="relative flex items-center justify-center lg:-translate-y-8 lg:-translate-x-4">
  <SemiconductorWafer />
</div>
      {/* Breathing external halo */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[390px]
          w-[390px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
        animate={{
          opacity: [0.28, 0.5, 0.28],
          scale: [0.96, 1.04, 0.96],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
      />

      {/* Rotating wafer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 52,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformOrigin: "50% 50%",
        }}
      >
        <svg
          className="h-full w-full"
          viewBox="-230 -230 460 460"
          role="img"
          aria-label="Animated QSI semiconductor wafer"
        >
          <WaferDefs />

          {/* External optical glow */}
          <circle
            r="198"
            fill="#3b82f6"
            opacity="0.075"
            filter="url(#blueGlow)"
          />

          {/* Main polished silicon */}
          <circle
            r="180"
            fill="url(#waferBase)"
            filter="url(#waferShadow)"
          />

          {/* Iridescent thin-film surface */}
          <circle
            r="180"
            fill="url(#iridescence)"
            opacity="0.78"
          />

          {/* Microscopic texture */}
          <circle
            r="178"
            fill="#ffffff"
            opacity="0.12"
            filter="url(#surfaceTexture)"
          />

          {/* Die pattern */}
          <WaferGrid />

          {/* Process rings */}
          {[62, 98, 132].map((radius) => (
            <circle
              key={radius}
              r={radius}
              fill="none"
              stroke="#dff5ff"
              strokeOpacity="0.07"
              strokeWidth="0.7"
            />
          ))}

          {/* Semiconductor marks */}
          <WaferMarks />

          {/* Moving cleanroom light */}
          <WaferReflection />

          {/* Dark edge depth */}
          <circle
            r="180"
            fill="url(#edgeShade)"
            pointerEvents="none"
          />

          {/* Layered polished edge */}
          <circle
            r="180"
            fill="none"
            stroke="#e9f6ff"
            strokeOpacity="0.74"
            strokeWidth="2.4"
          />

          <circle
            r="176.5"
            fill="none"
            stroke="#65a5d8"
            strokeOpacity="0.36"
            strokeWidth="1.2"
          />

          <circle
            r="173"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.13"
            strokeWidth="0.8"
          />
        </svg>
      </motion.div>

      {/* Fixed upright QSI logo */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="-230 -230 460 460"
        aria-hidden="true"
      >
        <WaferDefs />
        <QSILogoEtch />
      </svg>
    </div>
  );
}
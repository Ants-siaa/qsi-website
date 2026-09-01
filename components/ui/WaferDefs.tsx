export default function WaferDefs() {
  return (
    <defs>
      {/* Main polished silicon surface */}
      <radialGradient
        id="waferBase"
        cx="32%"
        cy="24%"
        r="92%"
      >
        <stop offset="0%" stopColor="#f8fdff" />
        <stop offset="10%" stopColor="#d9f2ff" />
        <stop offset="24%" stopColor="#84c6ec" />
        <stop offset="42%" stopColor="#3979b7" />
        <stop offset="60%" stopColor="#244f82" />
        <stop offset="78%" stopColor="#173456" />
        <stop offset="92%" stopColor="#0d2239" />
        <stop offset="100%" stopColor="#07131f" />
      </radialGradient>

      {/* Thin-film iridescence */}
      <linearGradient
        id="iridescence"
        x1="5%"
        y1="5%"
        x2="95%"
        y2="95%"
      >
        <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.32" />
        <stop offset="22%" stopColor="#60a5fa" stopOpacity="0.17" />
        <stop offset="48%" stopColor="#818cf8" stopOpacity="0.14" />
        <stop offset="68%" stopColor="#c084fc" stopOpacity="0.09" />
        <stop offset="86%" stopColor="#38bdf8" stopOpacity="0.11" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
      </linearGradient>

      {/* Dark edge depth */}
      <radialGradient id="edgeShade">
        <stop offset="72%" stopColor="#0f2742" stopOpacity="0" />
        <stop offset="88%" stopColor="#071827" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#020810" stopOpacity="0.82" />
      </radialGradient>

      {/* Fixed centre glow */}
      <radialGradient id="centreGlow">
        <stop offset="0%" stopColor="#e0f7ff" stopOpacity="0.82" />
        <stop offset="42%" stopColor="#60a5fa" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
      </radialGradient>

      {/* Broad cleanroom reflection */}
      <linearGradient
        id="cleanroomSweep"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="34%" stopColor="#ffffff" stopOpacity="0.05" />
        <stop offset="48%" stopColor="#ffffff" stopOpacity="0.34" />
        <stop offset="58%" stopColor="#dff7ff" stopOpacity="0.17" />
        <stop offset="75%" stopColor="#ffffff" stopOpacity="0.03" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>

      {/* Small sharp highlight */}
      <linearGradient
        id="edgeHighlight"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.68" />
        <stop offset="45%" stopColor="#bae6fd" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>

      {/* Etched logo */}
      <linearGradient
        id="etchGradient"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8" />
        <stop offset="48%" stopColor="#1e3a5f" stopOpacity="0.88" />
        <stop offset="100%" stopColor="#071827" stopOpacity="0.9" />
      </linearGradient>

      {/* Wafer shadow */}
      <filter
        id="waferShadow"
        x="-40%"
        y="-40%"
        width="180%"
        height="180%"
      >
        <feDropShadow
          dx="0"
          dy="16"
          stdDeviation="18"
          floodColor="#12345a"
          floodOpacity="0.28"
        />
      </filter>

      {/* Soft external glow */}
      <filter
        id="blueGlow"
        x="-60%"
        y="-60%"
        width="220%"
        height="220%"
      >
        <feGaussianBlur stdDeviation="18" result="blur" />
        <feFlood floodColor="#3b82f6" floodOpacity="0.34" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Subtle surface texture */}
      <filter
        id="surfaceTexture"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          seed="8"
          result="noise"
        />

        <feColorMatrix
          in="noise"
          type="saturate"
          values="0"
          result="monoNoise"
        />

        <feComponentTransfer in="monoNoise">
          <feFuncA type="table" tableValues="0 0.055" />
        </feComponentTransfer>
      </filter>

      {/* Wafer clipping area */}
      <clipPath id="waferClip">
        <circle r="180" />
      </clipPath>
    </defs>
  );
}
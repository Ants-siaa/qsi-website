export default function WaferMarks() {
  return (
    <g>
      {/* Edge exclusion ring */}
      <circle
        r="166"
        fill="none"
        stroke="#cce7fa"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeDasharray="2 3"
      />

      {/* Orientation notch */}
      <path
        d="M -9 178
           Q 0 170 9 178
           L 9 184
           L -9 184
           Z"
        fill="#06111c"
        stroke="#9bbad6"
        strokeOpacity="0.5"
        strokeWidth="0.7"
      />

      {/* Alignment marks */}
      <g
        stroke="#dff5ff"
        strokeOpacity="0.35"
        strokeWidth="0.8"
        fill="none"
      >
        <path d="M -132 -74 h 12 M -126 -80 v 12" />
        <path d="M 120 92 h 12 M 126 86 v 12" />
        <path d="M 84 -132 h 10 M 89 -137 v 10" />
      </g>

      {/* Inspection targets */}
      <g
        fill="none"
        stroke="#8ed8ff"
        strokeOpacity="0.24"
        strokeWidth="0.6"
      >
        <circle cx="-104" cy="112" r="5" />
        <circle cx="-104" cy="112" r="2" />

        <circle cx="118" cy="-86" r="5" />
        <circle cx="118" cy="-86" r="2" />
      </g>

      {/* Tiny fiducials */}
      <g fill="#d9f4ff" fillOpacity="0.25">
        <circle cx="-52" cy="-145" r="1.5" />
        <circle cx="145" cy="38" r="1.5" />
        <circle cx="44" cy="148" r="1.5" />
        <circle cx="-146" cy="26" r="1.5" />
      </g>
    </g>
  );
}
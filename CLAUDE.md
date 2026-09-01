export default function WaferDefs() {
  return (
    <defs>
      <radialGradient id="waferBase">
        <stop offset="0%" stopColor="#fdfefe" />
        <stop offset="40%" stopColor="#dce6f0" />
        <stop offset="75%" stopColor="#b8c7d8" />
        <stop offset="100%" stopColor="#8ea0b5" />
      </radialGradient>

      <linearGradient
        id="reflection"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="white" stopOpacity="0.65" />
        <stop offset="30%" stopColor="white" stopOpacity="0.18" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>

      <radialGradient id="centreGlow">
        <stop offset="0%" stopColor="#ccecff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#4f8dff" stopOpacity="0" />
      </radialGradient>

      <filter id="shadow">
        <feDropShadow
          dx="0"
          dy="10"
          stdDeviation="12"
          floodOpacity="0.25"
        />
      </filter>
    </defs>
  );
}
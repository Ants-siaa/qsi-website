export default function CircuitBackground() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.05]"
      viewBox="0 0 1400 800"
      fill="none"
    >
      <path
        d="M120 180 H380 V300 H620"
        stroke="#2563EB"
        strokeWidth="2"
      />

      <path
        d="M700 120 V280 H980 V520"
        stroke="#2563EB"
        strokeWidth="2"
      />

      <path
        d="M400 520 H760 V660 H1100"
        stroke="#2563EB"
        strokeWidth="2"
      />

      <circle cx="380" cy="180" r="6" fill="#2563EB" />
      <circle cx="620" cy="300" r="6" fill="#2563EB" />
      <circle cx="980" cy="280" r="6" fill="#2563EB" />
      <circle cx="760" cy="520" r="6" fill="#2563EB" />
    </svg>
  );
}
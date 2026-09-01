export default function QSILogoEtch() {
  return (
    <g>
      <circle
        r="48"
        fill="#dbeafe"
        fillOpacity="0.12"
        stroke="#dff5ff"
        strokeOpacity="0.18"
        strokeWidth="0.8"
      />

      <circle
        r="42"
        fill="url(#centreGlow)"
        opacity="0.42"
      />

      <text
        x="0"
        y="4"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="23"
        fontWeight="750"
        fill="url(#etchGradient)"
        letterSpacing="3.5"
      >
        QSI
      </text>

      <text
        x="0"
        y="25"
        textAnchor="middle"
        fontSize="5.2"
        fontWeight="600"
        fill="#17395f"
        fillOpacity="0.62"
        letterSpacing="1.15"
      >
        SEMICONDUCTORS
      </text>
    </g>
  );
}
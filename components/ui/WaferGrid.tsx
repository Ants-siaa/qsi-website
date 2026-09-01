interface WaferGridProps {
  radius?: number;
  dieSize?: number;
  gap?: number;
}

export default function WaferGrid({
  radius = 180,
  dieSize = 18,
  gap = 2,
}: WaferGridProps) {
  const dies = [];

  for (let y = -radius; y <= radius; y += dieSize + gap) {
    for (let x = -radius; x <= radius; x += dieSize + gap) {
      const corners = [
        [x, y],
        [x + dieSize, y],
        [x, y + dieSize],
        [x + dieSize, y + dieSize],
      ];

      const inside = corners.every(([cx, cy]) => {
        return Math.sqrt(cx * cx + cy * cy) < radius - 10;
      });

      if (!inside) {
        continue;
      }

      const variationSeed = Math.abs(x * 17 + y * 23) % 9;
      const opacity = 0.028 + variationSeed * 0.0045;

      const highlightSeed = Math.abs(x * 11 + y * 7) % 23;
      const isHighlight = highlightSeed === 3 || highlightSeed === 14;

      dies.push(
        <g key={`${x}-${y}`}>
          <rect
            x={x}
            y={y}
            width={dieSize}
            height={dieSize}
            rx="0.9"
            fill={
              isHighlight
                ? "rgba(140,210,255,0.10)"
                : `rgba(220,235,248,${opacity.toFixed(3)})`
            }
            stroke="rgba(255,255,255,0.065)"
            strokeWidth="0.35"
          />

          <path
            d={`M ${x + 3} ${y + dieSize - 4}
                H ${x + dieSize - 4}
                V ${y + 4}`}
            fill="none"
            stroke="rgba(120,200,245,0.045)"
            strokeWidth="0.45"
          />
        </g>
      );
    }
  }

  return (
    <g
      clipPath="url(#waferClip)"
      opacity="0.92"
    >
      {dies}
    </g>
  );
}
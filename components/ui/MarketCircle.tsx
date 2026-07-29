"use client";

interface MarketCircleProps {
  title: string;
  description: string;
  icon: string;
}

export default function MarketCircle({
  title,
  description,
  icon,
}: MarketCircleProps) {
  return (
    <div className="text-center">

      <div
        className="
          mx-auto
          flex
          h-32
          w-32
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-600
          to-emerald-400
          text-5xl
          shadow-xl
        "
      >
        {icon}
      </div>


      <h3 className="mt-6 text-xl font-bold text-blue-950">
        {title}
      </h3>


      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

    </div>
  );
}
"use client";

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function AdvantageCard({
  title,
  description,
  icon,
}: AdvantageCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-2xl text-white">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-blue-950">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
}
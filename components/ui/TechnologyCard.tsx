interface TechnologyCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function TechnologyCard({
  title,
  description,
  icon,
}: TechnologyCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-3xl text-white">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-blue-950">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-gray-600">
        {description}
      </p>

    </div>
  );
}
interface EcosystemCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function EcosystemCard({
  title,
  description,
  icon,
}: EcosystemCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 text-center">

      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-blue-700
          text-4xl
          text-white
        "
      >
        {icon}
      </div>


      <h3 className="mt-6 text-2xl font-bold text-blue-950">
        {title}
      </h3>


      <p className="mt-4 leading-relaxed text-gray-600">
        {description}
      </p>

    </div>
  );
}
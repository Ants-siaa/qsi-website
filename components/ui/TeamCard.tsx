interface TeamCardProps {
  name: string;
  role: string;
  description: string;
}

export default function TeamCard({
  name,
  role,
  description,
}: TeamCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg text-center">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-700 text-3xl font-bold text-white">
        {name.charAt(0)}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-blue-900">
        {name}
      </h3>

      <p className="mt-2 font-semibold text-blue-700">
        {role}
      </p>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

    </div>
  );
}
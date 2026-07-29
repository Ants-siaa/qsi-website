interface ProcessStepProps {
  title: string;
  description: string;
  icon: string;
}

export default function ProcessStep({
  title,
  description,
  icon,
}: ProcessStepProps) {
  return (
    <div className="text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-3xl text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-blue-950">
        {title}
      </h3>

      <p className="mt-3 text-sm text-gray-600">
        {description}
      </p>

    </div>
  );
}
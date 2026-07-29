import TechnologyCard from "./ui/TechnologyCard";
import ProcessStep from "./ui/ProcessStep";


const technologies = [
  {
    title: "Flexible Wafer Fabrication",
    description:
      "QSI's flexible foundry model enables rapid prototyping and specialised semiconductor production for strategic applications.",
    icon: "◉",
  },
  {
    title: "Compound Semiconductor Capability",
    description:
      "Supporting advanced materials including GaN and SiC for power electronics, RF and emerging technologies.",
    icon: "⚡",
  },
  {
    title: "ASIC Design Ecosystem",
    description:
      "Connecting Australian semiconductor design expertise with fabrication, testing and validation pathways.",
    icon: "◈",
  },
  {
    title: "Testing & Validation",
    description:
      "Supporting semiconductor characterisation and qualification from prototype through deployment.",
    icon: "✓",
  },
  {
    title: "Research to Production",
    description:
      "Bridging Australian research capability with commercial semiconductor outcomes.",
    icon: "🔬",
  },
];


const process = [
  {
    title: "Design",
    description:
      "Chip architecture, verification and optimisation.",
    icon: "💡",
  },
  {
    title: "Prototype",
    description:
      "Rapid development and semiconductor validation.",
    icon: "🧪",
  },
  {
    title: "Fabrication",
    description:
      "Flexible wafer manufacturing capability.",
    icon: "◉",
  },
  {
    title: "Testing",
    description:
      "Characterisation and qualification.",
    icon: "✓",
  },
  {
    title: "Deployment",
    description:
      "Supporting commercial and strategic applications.",
    icon: "🚀",
  },
];


export default function TechnologyPlatform() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Technology Platform
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950 md:text-5xl">
            From Design to Silicon
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            QSI is developing a flexible semiconductor manufacturing
            platform connecting innovation, fabrication, testing and
            deployment.
          </p>

        </div>


        {/* Process pathway */}
        <div className="mt-16 grid gap-10 md:grid-cols-5">

          {process.map((step) => (
            <ProcessStep
              key={step.title}
              {...step}
            />
          ))}

        </div>


        {/* Technology capabilities */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.title}
              {...technology}
            />
          ))}

        </div>


      </div>

    </section>
  );
}
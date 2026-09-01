import {
  Cpu,
  Factory,
  FlaskConical,
  ShieldCheck,
  DraftingCompass,
  TestTubeDiagonal,
  Rocket,
} from "lucide-react";

const process = [
  {
    icon: DraftingCompass,
    title: "Design",
    description: "Device architecture, modelling and optimisation.",
  },
  {
    icon: FlaskConical,
    title: "Prototype",
    description: "Rapid process development and device iteration.",
  },
  {
    icon: Factory,
    title: "Fabricate",
    description: "Flexible wafer manufacturing for specialist applications.",
  },
  {
    icon: TestTubeDiagonal,
    title: "Test",
    description: "Characterisation, validation and qualification.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Supporting commercial and strategic applications.",
  },
];

const technologies = [
  {
    icon: Cpu,
    title: "Compound Semiconductors",
    description:
      "GaN, SiC and III-V technologies for high-performance power, RF, photonic and advanced electronic applications.",
  },
  {
    icon: Factory,
    title: "Flexible Manufacturing",
    description:
      "Low and medium-volume fabrication designed for specialist products, rapid iteration and sovereign supply requirements.",
  },
  {
    icon: FlaskConical,
    title: "Rapid Prototyping",
    description:
      "Accelerating the transition from research and device concepts into manufacturable semiconductor technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Sovereign Capability",
    description:
      "Creating trusted Australian manufacturing capability for defence, space, AI, quantum and critical technologies.",
  },
];

export default function TechnologyPlatform() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-100/30
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Technology Platform
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-blue-950 md:text-5xl">
            From Innovation to Fabrication
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            QSI is creating an Australian pathway that connects semiconductor
            design, rapid development, flexible fabrication, testing and
            deployment.
          </p>
        </div>

        {/* Process pathway */}
        <div className="relative mt-16">

          {/* Desktop connecting line */}
          <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-blue-200 lg:block" />

          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative text-center"
                >
                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-200
                      bg-white
                      shadow-sm
                    "
                  >
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">
                    0{index + 1}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-blue-950">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology capability cards */}
        <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {technologies.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/90
                  p-7
                  shadow-sm
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    transition-colors
                    duration-300
                    group-hover:bg-blue-600
                  "
                >
                  <Icon className="h-7 w-7 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
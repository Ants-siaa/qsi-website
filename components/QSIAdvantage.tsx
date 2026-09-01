import {
  Factory,
  Cpu,
  Workflow,
  Network,
} from "lucide-react";

const advantages = [
  {
    title: "Flexible Foundry Model",
    description:
      "A specialist manufacturing platform designed for prototyping, low-volume production and strategic applications that do not fit the traditional mega-fab model.",
    icon: Factory,
  },
  {
    title: "Compound Semiconductor Platform",
    description:
      "Supporting GaN, SiC and advanced III-V technologies for power electronics, RF, photonics and next-generation systems.",
    icon: Cpu,
  },
  {
    title: "Design-to-Silicon Pathway",
    description:
      "Connecting semiconductor design, fabrication, testing and validation to accelerate the pathway from innovation to manufacturable devices.",
    icon: Workflow,
  },
  {
    title: "Strategic Australian Ecosystem",
    description:
      "Connecting universities, industry, defence and international technology partners to build a stronger Australian semiconductor ecosystem.",
    icon: Network,
  },
];

export default function QSIAdvantage() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Subtle background atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-blue-100/40
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section introduction */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            The QSI Advantage
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-blue-950 md:text-5xl">
            A Different Model for Semiconductor Manufacturing
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            QSI combines flexible manufacturing, compound semiconductor
            expertise and strategic partnerships to create an Australian
            pathway from innovation to production.
          </p>

        </div>

        {/* Advantage cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:shadow-xl
                "
              >

                {/* Decorative corner glow */}
                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-blue-100/0
                    blur-2xl
                    transition
                    duration-300
                    group-hover:bg-blue-100/70
                  "
                />

                <div className="relative">

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
                    <Icon
                      className="
                        h-7
                        w-7
                        text-blue-600
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  <h3 className="text-xl font-bold text-blue-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
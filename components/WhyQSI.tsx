import {
  ShieldCheck,
  Factory,
  Cpu,
  Satellite,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Sovereign Capability",
    description:
      "Building trusted Australian semiconductor capability to reduce dependence on offshore supply chains and strengthen national resilience.",
  },
  {
    icon: Factory,
    title: "Flexible Manufacturing",
    description:
      "A specialist foundry model designed for prototyping, low-volume production and technologies that do not fit traditional high-volume fabs.",
  },
  {
    icon: Cpu,
    title: "Compound Semiconductor Focus",
    description:
      "Supporting GaN, SiC and advanced III-V technologies for RF, power electronics, photonics and next-generation systems.",
  },
  {
    icon: Satellite,
    title: "Defence & Critical Industries",
    description:
      "Enabling secure semiconductor capability for defence, space, AI, communications and other strategically important Australian industries.",
  },
];

export default function WhyQSI() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-slate-50 py-28"
    >
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Why QSI
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-blue-950 md:text-5xl">
            Australia Needs Semiconductor Capability of Its Own
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            QSI is being built to close a strategic gap in Australia&apos;s
            technology ecosystem: the ability to prototype and manufacture
            specialised semiconductor devices domestically.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className={`
                  group
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
                  ${index === 0 ? "md:col-span-2" : ""}
                `}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-600">
                    <Icon className="h-7 w-7 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-blue-950">
                      {reason.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
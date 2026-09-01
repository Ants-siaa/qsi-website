import {
  GraduationCap,
  Factory,
  Landmark,
  ShieldCheck,
  Globe2,
  Network,
} from "lucide-react";

const partners = [
  {
    icon: GraduationCap,
    title: "Research & Universities",
    description:
      "Connecting Australian research, universities and technical expertise with pathways to semiconductor manufacturing.",
  },
  {
    icon: Factory,
    title: "Industry & Technology",
    description:
      "Working with semiconductor companies, technology developers and manufacturers to accelerate commercial outcomes.",
  },
  {
    icon: Landmark,
    title: "Government",
    description:
      "Aligning semiconductor capability with national priorities in sovereign manufacturing, resilience and economic security.",
  },
  {
    icon: ShieldCheck,
    title: "Defence & Critical Industry",
    description:
      "Supporting trusted technology pathways for defence, space and other strategically important Australian industries.",
  },
  {
    icon: Globe2,
    title: "Global Technology Partners",
    description:
      "Building international relationships that provide access to technology, expertise, equipment and global semiconductor networks.",
  },
];

export default function StrategicPartners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-slate-50 py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-100/50
            blur-3xl
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Strategic Partnerships
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-blue-950 md:text-5xl">
            Building Capability Through Collaboration
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Semiconductor manufacturing requires an interconnected ecosystem.
            QSI is building the partnerships needed to connect Australian
            innovation with manufacturing capability and global expertise.
          </p>

        </div>

        {/* Partnership network */}
        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Central vertical line */}
          <div className="absolute bottom-10 left-7 top-10 hidden w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-100 md:block" />

          <div className="space-y-6">

            {partners.map((partner, index) => {
              const Icon = partner.icon;

              return (
                <div
                  key={partner.title}
                  className="
                    group
                    relative
                    grid
                    gap-5
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white/90
                    p-6
                    shadow-sm
                    backdrop-blur
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:border-blue-300
                    hover:shadow-lg
                    md:grid-cols-[72px_1fr]
                    md:items-center
                  "
                >

                  {/* Network node */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-200
                      bg-blue-50
                      transition-colors
                      duration-300
                      group-hover:bg-blue-600
                    "
                  >
                    <Icon className="h-6 w-6 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">

                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">
                        0{index + 1}
                      </span>

                      <h3 className="text-xl font-bold text-blue-950">
                        {partner.title}
                      </h3>

                    </div>

                    <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
                      {partner.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

          {/* QSI connector */}
          <div className="mt-10 flex justify-center">

            <div
              className="
                inline-flex
                items-center
                gap-4
                rounded-full
                bg-blue-950
                px-7
                py-4
                text-white
                shadow-xl
                shadow-blue-950/10
              "
            >
              <Network className="h-6 w-6 text-cyan-300" />

              <span className="font-semibold">
                Connected through QSI
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

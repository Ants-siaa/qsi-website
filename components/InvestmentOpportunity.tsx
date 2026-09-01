import {
  Building2,
  Handshake,
  Landmark,
  ArrowRight,
  FileText,
} from "lucide-react";

import CircuitBackground from "./ui/CircuitBackground";

const opportunities = [
  {
    icon: Building2,
    number: "01",
    title: "Investment & Strategic Capital",
    description:
      "Partner with QSI to help establish sovereign semiconductor manufacturing capability and participate in Australia's advanced technology future.",
  },
  {
    icon: Handshake,
    number: "02",
    title: "Industry Partnerships",
    description:
      "Collaborate with QSI on specialist semiconductor solutions, technology development and secure manufacturing pathways.",
  },
  {
    icon: Landmark,
    number: "03",
    title: "Government & Research",
    description:
      "Work with QSI on strategic programs, research translation and initiatives that strengthen Australian semiconductor capability.",
  },
];

export default function InvestmentOpportunity() {
  return (
    <section
      id="investment"
      className="relative overflow-hidden bg-blue-950 py-28"
    >
      {/* Background circuit pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <CircuitBackground />
      </div>

      {/* Atmospheric glow */}
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
          bg-blue-600/20
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Investment Opportunity
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Help Build Australia&apos;s
            <span className="block text-blue-300">
              Semiconductor Future
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-blue-100">
            QSI is creating the flexible manufacturing platform needed to
            translate Australian semiconductor innovation into sovereign,
            commercially relevant capability.
          </p>

        </div>

        {/* Partnership pathways */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;

            return (
              <div
                key={opportunity.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-8
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300/40
                  hover:bg-white/[0.09]
                "
              >
                <div className="flex items-start justify-between">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-500/15
                      transition-colors
                      duration-300
                      group-hover:bg-blue-500
                    "
                  >
                    <Icon className="h-7 w-7 text-cyan-300 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <span className="text-sm font-semibold tracking-[0.2em] text-blue-300/70">
                    {opportunity.number}
                  </span>

                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  {opportunity.title}
                </h3>

                <p className="mt-4 leading-relaxed text-blue-100/80">
                  {opportunity.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Final CTA */}
        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-8
            rounded-3xl
            border
            border-white/10
            bg-white/[0.07]
            px-8
            py-8
            backdrop-blur
            lg:flex-row
            lg:px-10
          "
        >

          <div className="max-w-2xl">

            <p className="text-xl font-bold text-white">
              Ready to explore a partnership with QSI?
            </p>

            <p className="mt-2 leading-relaxed text-blue-100/80">
              Speak with the founding team about investment, industry
              collaboration or strategic engagement.
            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-4">

            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-7
                py-4
                font-semibold
                text-blue-950
                transition
                duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
              "
            >
              Contact QSI
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-300/50
                bg-blue-900/30
                px-7
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:-translate-y-0.5
                hover:border-blue-200
                hover:bg-blue-800/50
              "
            >
              <FileText className="h-5 w-5" />
              Investment Prospectus
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
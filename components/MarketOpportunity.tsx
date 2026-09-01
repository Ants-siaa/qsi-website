import {
  ShieldCheck,
  Rocket,
  BrainCircuit,
  HeartPulse,
  Zap,
  Atom,
  Cpu,
} from "lucide-react";

const markets = [
  {
    title: "Defence & Sovereignty",
    description:
      "Trusted semiconductor capability for defence and critical technologies.",
    icon: ShieldCheck,
  },
  {
    title: "Space Systems",
    description:
      "Advanced electronics for Australia's growing space sector.",
    icon: Rocket,
  },
  {
    title: "AI & Edge Computing",
    description:
      "Specialised devices for intelligent and high-performance systems.",
    icon: BrainCircuit,
  },
  {
    title: "Medical Technology",
    description:
      "Semiconductor platforms for next-generation healthcare technologies.",
    icon: HeartPulse,
  },
  {
    title: "Power Electronics",
    description:
      "GaN and SiC technologies for energy, transport and industrial systems.",
    icon: Zap,
  },
  {
    title: "Photonics & Quantum",
    description:
      "Advanced semiconductor platforms for photonic and quantum technologies.",
    icon: Atom,
  },
];

export default function MarketOpportunity() {
  return (
    <section
  id="markets"
  className="relative overflow-hidden bg-slate-50 py-28"
>

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-100/50
            blur-3xl
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-100/40
            blur-3xl
          "
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Market Opportunity
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-blue-950 md:text-5xl">
            Enabling Australia&apos;s Future Industries
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Semiconductor capability is foundational to the technologies
            transforming defence, space, energy, healthcare and advanced
            computing.
          </p>

        </div>

        {/* Market ecosystem */}
<div className="relative mx-auto mt-20 max-w-6xl">

  {/* Desktop ecosystem */}
  <div className="relative hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-x-6 lg:gap-y-8">

    {/* Connection lines */}
    <div className="pointer-events-none absolute inset-0 z-0">

      <div className="absolute left-1/2 top-[16%] h-[68%] w-px -translate-x-1/2 bg-blue-200" />

      <div className="absolute left-[16%] top-1/2 h-px w-[68%] bg-blue-100" />

      <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 rotate-[27deg] bg-blue-100" />

      <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 -rotate-[27deg] bg-blue-100" />

    </div>


    {/* Top row */}

    <div className="relative z-10">
      <MarketNode
        title={markets[0].title}
        description={markets[0].description}
        Icon={markets[0].icon}
      />
    </div>

    <div className="relative z-10">
      <MarketNode
        title={markets[1].title}
        description={markets[1].description}
        Icon={markets[1].icon}
      />
    </div>

    <div className="relative z-10">
      <MarketNode
        title={markets[2].title}
        description={markets[2].description}
        Icon={markets[2].icon}
      />
    </div>


    {/* Middle row */}

    <div />

    <div className="relative z-20 flex items-center justify-center py-0">

      <div
        className="
          flex
          h-44
          w-44
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-blue-300
          bg-gradient-to-br
          from-blue-950
          via-blue-800
          to-blue-600
          text-center
          shadow-2xl
          shadow-blue-900/20
        "
      >
        <Cpu className="h-8 w-8 text-cyan-300" />

        <p className="mt-3 text-2xl font-bold text-white">
          QSI
        </p>

        <p className="mt-1 px-5 text-xs font-medium uppercase tracking-[0.15em] text-blue-100">
          Semiconductor Platform
        </p>
      </div>

    </div>

    <div />


    {/* Bottom row */}

    <div className="relative z-10">
      <MarketNode
        title={markets[3].title}
        description={markets[3].description}
        Icon={markets[3].icon}
      />
    </div>

    <div className="relative z-10">
      <MarketNode
        title={markets[4].title}
        description={markets[4].description}
        Icon={markets[4].icon}
      />
    </div>

    <div className="relative z-10">
      <MarketNode
        title={markets[5].title}
        description={markets[5].description}
        Icon={markets[5].icon}
      />
    </div>

  </div>


  {/* Tablet / mobile layout */}
  <div className="grid gap-6 md:grid-cols-2 lg:hidden">

    <div className="flex items-center justify-center rounded-3xl bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 p-8 text-center md:col-span-2">
      <div>
        <Cpu className="mx-auto h-8 w-8 text-cyan-300" />

        <p className="mt-3 text-2xl font-bold text-white">
          QSI
        </p>

        <p className="mt-1 text-sm text-blue-100">
          Semiconductor Platform
        </p>
      </div>
    </div>

    {markets.map((market) => (
      <MarketNode
        key={market.title}
        title={market.title}
        description={market.description}
        Icon={market.icon}
      />
    ))}

  </div>

</div>

      </div>

    </section>
  );
}

interface MarketNodeProps {
  title: string;
  description: string;
  Icon: React.ComponentType<{
    className?: string;
  }>;
}

function MarketNode({
  title,
  description,
  Icon,
}: MarketNodeProps) {
  return (
    <div
      className="
        group
        relative
        z-10
        min-h-[210px]
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
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-blue-50
          transition-colors
          duration-300
          group-hover:bg-blue-600
        "
      >
        <Icon className="h-6 w-6 text-blue-600 transition-colors duration-300 group-hover:text-white" />
      </div>

      <h3 className="mt-5 text-xl font-bold text-blue-950">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
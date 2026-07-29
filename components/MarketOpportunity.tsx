import MarketCircle from "./ui/MarketCircle";

const markets = [
  {
    title: "Defence & Sovereignty",
    description:
      "Supporting secure semiconductor supply chains for Australia's critical technologies.",
    icon: "🛡️",
  },
  {
    title: "Space Systems",
    description:
      "Enabling advanced electronics for Australia's growing space sector.",
    icon: "🚀",
  },
  {
    title: "AI & Edge Computing",
    description:
      "Supporting intelligent systems requiring specialised semiconductor capability.",
    icon: "🤖",
  },
  {
    title: "Medical Technology",
    description:
      "Providing semiconductor capability for next-generation healthcare solutions.",
    icon: "🏥",
  },
  {
    title: "Power Electronics",
    description:
      "Unlocking applications using advanced materials including GaN and SiC.",
    icon: "⚡",
  },
  {
    title: "Photonics & Quantum",
    description:
      "Supporting emerging technologies requiring advanced semiconductor platforms.",
    icon: "🔬",
  },
];

export default function MarketOpportunity() {
  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Market Opportunity
          </p>


          <h2 className="mt-4 text-4xl font-bold text-blue-950 md:text-5xl">
            Positioned at the Centre of Australia's Future Industries
          </h2>


          <p className="mt-6 text-lg text-gray-600">
            Semiconductor capability underpins the technologies shaping
            defence, space, healthcare, energy and advanced computing.
          </p>

        </div>


        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {markets.map((market) => (
            <MarketCircle
              key={market.title}
              {...market}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
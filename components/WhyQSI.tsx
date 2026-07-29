import CircleCard from "./ui/CircleCard";

const cards = [
  {
    title: "Sovereign Capability",
    description:
      "Building Australia's domestic semiconductor capability and reducing dependence on offshore supply chains.",
    icon: "🇦🇺",
  },
  {
    title: "Compound Semiconductors",
    description:
      "Supporting next-generation power electronics, RF and photonics technologies.",
    icon: "⚡",
  },
  {
    title: "Defence & Space",
    description:
      "Creating secure semiconductor capability for critical Australian industries.",
    icon: "🛰️",
  },
  {
    title: "Medical Technology",
    description:
      "Enabling advanced healthcare devices and precision electronics.",
    icon: "🏥",
  },
  {
    title: "AI & Edge Computing",
    description:
      "Supporting future intelligent systems and connected technologies.",
    icon: "🤖",
  },
  {
    title: "Advanced Manufacturing",
    description:
      "Growing Australian semiconductor engineering and manufacturing expertise.",
    icon: "🏭",
  },
];


export default function WhyQSI() {
  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Why QSI
          </p>


          <h2 className="mt-4 text-4xl font-bold text-blue-950 md:text-5xl">
            Building Australia's Semiconductor Future
          </h2>


          <p className="mt-6 text-lg text-gray-600">
            QSI is creating sovereign semiconductor capability
            to support Australia's future industries.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {cards.map((card) => (
            <CircleCard
              key={card.title}
              {...card}
            />
          ))}

        </div>


      </div>

    </section>
  );
}
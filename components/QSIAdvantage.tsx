import AdvantageCard from "./ui/AdvantageCard";

const advantages = [
  {
    title: "Flexible Foundry Model",
    description:
      "A flexible semiconductor manufacturing platform designed for prototyping, specialised production and strategic applications.",
    icon: "◉",
  },
  {
    title: "Compound Semiconductors",
    description:
      "Supporting advanced semiconductor materials including GaN, SiC and emerging compound technologies.",
    icon: "⚡",
  },
  {
    title: "Design-to-Silicon Pathway",
    description:
      "Connecting semiconductor design, fabrication, testing and validation within an Australian ecosystem.",
    icon: "◈",
  },
  {
    title: "Secure Supply Chain",
    description:
      "Building trusted domestic semiconductor capability for critical industries and national resilience.",
    icon: "🔒",
  },
];

export default function QSIAdvantage() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            The QSI Advantage
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950 md:text-5xl">
            Building a Flexible Australian Semiconductor Platform
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            QSI combines semiconductor expertise, advanced manufacturing
            capability and strategic partnerships to create a pathway from
            innovation to production.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {advantages.map((item) => (
            <AdvantageCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
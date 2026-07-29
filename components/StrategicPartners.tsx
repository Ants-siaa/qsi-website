import EcosystemCard from "./ui/EcosystemCard";


const partners = [
  {
    title: "Research & Innovation",
    description:
      "Connecting universities, research organisations and semiconductor expertise to accelerate technology development.",
    icon: "🔬",
  },
  {
    title: "Industry Partners",
    description:
      "Working with technology companies, manufacturers and system integrators to create commercial pathways.",
    icon: "🏭",
  },
  {
    title: "Government & Strategic Support",
    description:
      "Aligning with national priorities around sovereign capability, advanced manufacturing and technology resilience.",
    icon: "🇦🇺",
  },
];


export default function StrategicPartners() {
  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Ecosystem
          </p>


          <h2 className="mt-4 text-4xl font-bold text-blue-950 md:text-5xl">
            Building Australia's Semiconductor Ecosystem
          </h2>


          <p className="mt-6 text-lg text-gray-600">
            QSI brings together research capability, industry expertise and
            strategic partnerships to accelerate Australia's semiconductor future.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {partners.map((partner) => (
            <EcosystemCard
              key={partner.title}
              {...partner}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
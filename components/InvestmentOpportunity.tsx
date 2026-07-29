import OpportunityCard from "./ui/OpportunityCard";


const opportunities = [
  {
    title: "Investment Partners",
    description:
      "Partner with QSI to support the development of Australia's sovereign semiconductor capability and advanced manufacturing future.",
    icon: "💼",
  },
  {
    title: "Industry Partners",
    description:
      "Collaborate with QSI to develop secure semiconductor solutions for defence, technology and advanced industries.",
    icon: "🤝",
  },
  {
    title: "Research & Government Partners",
    description:
      "Work with QSI to accelerate innovation through research collaboration and strategic programs.",
    icon: "🇦🇺",
  },
];


export default function InvestmentOpportunity() {
  return (
    <section className="bg-blue-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center text-white">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Investment Opportunity
          </p>


          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Partner with QSI to Build Australia's Semiconductor Future
          </h2>


          <p className="mt-6 text-lg text-blue-100">
            QSI is creating sovereign semiconductor capability through
            advanced manufacturing, strategic partnerships and a flexible
            foundry model.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {opportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.title}
              {...opportunity}
            />
          ))}

        </div>


        <div className="mt-16 text-center">

          <button
            className="
              rounded-full
              bg-white
              px-10
              py-4
              font-semibold
              text-blue-950
              transition
              hover:scale-105
            "
          >
            Contact QSI
          </button>

        </div>

      </div>

    </section>
  );
}
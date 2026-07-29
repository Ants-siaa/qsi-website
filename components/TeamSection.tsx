import TeamCard from "./ui/TeamCard";


const founders = [
  {
    name: "Anthony Christian",
    role: "Director, Technical",
    description:
      "Semiconductor manufacturing leader with extensive experience across wafer fabrication, cleanroom operations, advanced manufacturing and technology development. Anthony brings deep operational expertise and technical leadership to QSI's vision of building Australia's sovereign semiconductor capability.",
  },
  {
    name: "Paget Hargreaves",
    role: "Director, Commercial Development",
    description:
      "Technology and commercial leader supporting QSI's growth strategy, industry engagement and partnership development. Paget focuses on connecting semiconductor capability with market opportunities, customers and strategic partners.",
  },
  {
    name: "Dr Stewart McGlashan",
    role: "Director, Finance & Governance",
    description:
      "Strategic leader supporting QSI's financial planning, governance framework and long-term growth pathway. Stewart contributes expertise in business strategy, financial management and organisational development.",
  },
];


const advisors = [
  {
    name: "Technology Advisors",
    role: "Future Advisory Panel",
    description:
      "Experienced semiconductor engineers and researchers supporting technology strategy, process development and manufacturing capability.",
  },
  {
    name: "Industry Advisors",
    role: "Future Advisory Panel",
    description:
      "Industry leaders supporting partnerships, customer engagement and commercialisation pathways.",
  },
  {
    name: "Strategic Advisors",
    role: "Future Advisory Panel",
    description:
      "Experienced advisors supporting investment strategy, government engagement and long-term growth.",
  },
];


export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Leadership
          </p>


          <h2 className="mt-4 text-4xl font-bold text-blue-950 md:text-5xl">
            Founding Team & Advisors
          </h2>


          <p className="mt-6 text-lg text-gray-600">
            QSI brings together semiconductor manufacturing expertise,
            engineering capability and strategic leadership to build
            Australia's sovereign semiconductor future.
          </p>

        </div>


        <h3 className="mt-16 text-center text-3xl font-bold text-blue-950">
          Founding Team
        </h3>


        <div className="mt-10 grid gap-8 md:grid-cols-3">

          {founders.map((member) => (
            <TeamCard
              key={member.name}
              {...member}
            />
          ))}

        </div>


        <h3 className="mt-24 text-center text-3xl font-bold text-blue-950">
          Advisory Network
        </h3>


        <div className="mt-10 grid gap-8 md:grid-cols-3">

          {advisors.map((member) => (
            <TeamCard
              key={member.name}
              {...member}
            />
          ))}

        </div>


      </div>

    </section>
  );
}
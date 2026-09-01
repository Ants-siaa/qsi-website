import {
  UserRound,
  UsersRound,
  BriefcaseBusiness,
} from "lucide-react";

const founders = [
  {
    name: "Anthony Christian",
    role: "Technical Director",
    description:
      "Semiconductor manufacturing leader with extensive experience across wafer fabrication, cleanroom operations, advanced manufacturing and technology development. Anthony leads QSI's technical strategy and sovereign manufacturing vision.",
    initials: "AC",
  },
  {
    name: "Paget Hargreaves",
    role: "Director, Commercial Development",
    description:
      "Technology and commercial leader supporting QSI's growth strategy, industry engagement and partnership development. Paget focuses on connecting semiconductor capability with customers, markets and strategic partners.",
    initials: "PH",
  },
  {
    name: "Dr Stewart McGlashan",
    role: "Director, Finance & Governance",
    description:
      "Strategic leader supporting QSI's financial planning, governance framework and long-term growth pathway. Stewart contributes expertise in business strategy, financial management and organisational development.",
    initials: "SM",
  },
];

const advisors = [
  {
    icon: UserRound,
    title: "Technology Advisors",
    description:
      "Experienced semiconductor engineers and researchers supporting process development, technology strategy and manufacturing capability.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Advisors",
    description:
      "Industry leaders supporting customer engagement, partnerships and commercialisation pathways.",
  },
  {
    icon: UsersRound,
    title: "Strategic Advisors",
    description:
      "Experienced advisors supporting investment strategy, government engagement and long-term organisational growth.",
  },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-blue-100/30
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Leadership
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-blue-950 md:text-5xl">
            Leadership Built on Semiconductor Experience
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            QSI brings together semiconductor manufacturing expertise,
            commercial leadership and strong governance to build Australia&apos;s
            sovereign semiconductor capability.
          </p>
        </div>

        {/* Founding team */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {founders.map((member) => (
            <div
              key={member.name}
              className="
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
              "
            >
              <div className="flex items-start justify-between gap-4">

                {/* Placeholder portrait */}
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-blue-950
                    via-blue-700
                    to-cyan-500
                    text-xl
                    font-bold
                    text-white
                    shadow-lg
                  "
                >
                  {member.initials}
                </div>

                {/* LinkedIn placeholder */}
                

              </div>

              <h3 className="mt-7 text-2xl font-bold text-blue-950">
                {member.name}
              </h3>

              <p className="mt-1 font-semibold text-blue-600">
                {member.role}
              </p>

              <p className="mt-5 leading-relaxed text-slate-600">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Advisory network */}
        <div className="mt-24">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-500">
              Advisory Network
            </p>

            <h3 className="mt-3 text-3xl font-bold text-blue-950">
              Building the Broader Team
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              QSI will continue to expand its advisory network as the company
              develops its technology, partnerships and manufacturing capability.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {advisors.map((advisor) => {
              const Icon = advisor.icon;

              return (
                <div
                  key={advisor.title}
                  className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-slate-50/80
                    p-7
                    text-center
                  "
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-blue-950">
                    {advisor.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {advisor.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
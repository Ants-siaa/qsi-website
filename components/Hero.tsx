import Link from "next/link";
import SemiconductorWafer from "./ui/SemiconductorWafer";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32">

      {/* Background glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100 blur-3xl opacity-60" />


      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">


        {/* Left Content */}
        <div>


          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            QSI Semiconductors
          </p>


          <h1 className="text-5xl font-bold leading-tight text-blue-950 md:text-6xl">

            Engineering Australia's
            <br />

            Sovereign Semiconductor Capability

          </h1>


          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-600">

            QSI is developing Australia's flexible compound semiconductor
            foundry, enabling advanced manufacturing capability across
            defence, photonics, AI, space and critical industries.

          </p>


          <div className="mt-10 flex flex-wrap gap-4">


            <Link
              href="#partners"
              className="
                rounded-full
                bg-blue-700
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-blue-800
              "
            >
              Partner with QSI →
            </Link>


            <Link
              href="#vision"
              className="
                rounded-full
                border
                border-blue-700
                px-8
                py-4
                font-semibold
                text-blue-700
                transition
                hover:bg-blue-50
              "
            >
              Explore Our Vision
            </Link>


          </div>


          {/* Capability highlights */}
          <div className="mt-14 grid grid-cols-2 gap-6">


            <div>
              <p className="font-semibold text-blue-950">
                Compound Semiconductors
              </p>
            </div>


            <div>
              <p className="font-semibold text-blue-950">
                Flexible Manufacturing
              </p>
            </div>


            <div>
              <p className="font-semibold text-blue-950">
                Rapid Prototyping
              </p>
            </div>


            <div>
              <p className="font-semibold text-blue-950">
                Australian Capability
              </p>
            </div>


          </div>


        </div>



               {/* Right Visual */}
        {/* Right Visual */}
<div className="relative flex items-center justify-center">
  <SemiconductorWafer />
</div>

      </div>

    </section>
  );
}
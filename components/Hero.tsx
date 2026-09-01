import Link from "next/link";
import CircuitBackground from "./ui/CircuitBackground";
import SemiconductorWafer from "./ui/SemiconductorWafer";
import {
  Cpu,
  Factory,
  Zap,
  MapPinned,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <CircuitBackground />

{/* Digital Sunrise */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">

  {/* Main atmospheric glow */}
  <div
    className="
      absolute
      left-[58%]
      top-20
      h-[800px]
      w-[800px]
      -translate-x-1/2
      rounded-full
      bg-gradient-to-r
      from-cyan-300/20
      via-blue-400/20
      to-blue-800/20
      blur-3xl
    "
  />

  {/* Wafer-side cyan glow */}
  <div
    className="
      absolute
      right-0
      top-40
      h-[460px]
      w-[460px]
      rounded-full
      bg-cyan-400/10
      blur-3xl
    "
  />

</div>

     

     <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 pb-6 lg:pb-20 pt-28 lg:grid-cols-[1.1fr_0.9fr]">


        {/* Left Content */}
        <div>


          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            QSI Semiconductors
          </p>


          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-blue-950 md:text-6xl xl:text-7xl">

  <span className="block text-[0.72em] font-semibold tracking-normal text-slate-700">
    Engineering Australia&apos;s
  </span>

  <span className="block bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
    Sovereign Semiconductor
  </span>

  <span className="block">
    Capability
  </span>

</h1>


          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600">
  Building Australia&apos;s sovereign compound semiconductor
  manufacturing capability for defence, AI, photonics,
  space and the industries shaping tomorrow.
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
<div className="mt-12 grid grid-cols-2 gap-4">

  <div className="rounded-2xl border border-blue-100 bg-white/70 px-5 py-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
    <Cpu className="mb-2 h-6 w-6 text-blue-600" />

    <p className="font-semibold text-blue-950">
      Compound Semiconductors
    </p>

    <p className="mt-1 text-sm leading-relaxed text-slate-500">
      GaN, SiC and advanced compound semiconductor technologies.
    </p>
  </div>


  <div className="rounded-2xl border border-blue-100 bg-white/70 px-5 py-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
    <Factory className="mb-2 h-6 w-6 text-blue-600" />

    <p className="font-semibold text-blue-950">
      Flexible Manufacturing
    </p>

    <p className="mt-1 text-sm leading-relaxed text-slate-500">
      Agile fabrication from prototype through specialist production.
    </p>
  </div>


  <div className="rounded-2xl border border-blue-100 bg-white/70 px-5 py-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
    <Zap className="mb-2 h-6 w-6 text-blue-600" />

    <p className="font-semibold text-blue-950">
      Rapid Prototyping
    </p>

    <p className="mt-1 text-sm leading-relaxed text-slate-500">
      Accelerating the pathway from research to manufacturable devices.
    </p>
  </div>


  <div className="rounded-2xl border border-blue-100 bg-white/70 px-5 py-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
    <MapPinned className="mb-2 h-6 w-6 text-blue-600" />

    <p className="font-semibold text-blue-950">
      Australian Capability
    </p>

    <p className="mt-1 text-sm leading-relaxed text-slate-500">
      Building trusted domestic semiconductor capability and expertise.
    </p>
  </div>

</div>

        </div>



               {/* Right Visual */}
        {/* Right Visual */}
<div
  className="
    relative
    -mt-8
    flex
    items-center
    justify-center
    pb-2
    lg:mt-0
    lg:pb-0
    lg:-translate-x-12
    lg:-translate-y-2
  "
>
  <SemiconductorWafer />
</div>

      </div>

    </section>
  );
}
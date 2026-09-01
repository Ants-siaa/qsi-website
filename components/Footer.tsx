import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-xl font-bold text-blue-950">
              QSI Semiconductors
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Engineering Australia&apos;s sovereign semiconductor capability.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
            <Link href="#technology" className="transition hover:text-blue-600">
              Technology
            </Link>

            <Link href="#markets" className="transition hover:text-blue-600">
              Markets
            </Link>

            <Link href="#partners" className="transition hover:text-blue-600">
              Partnerships
            </Link>

            <Link href="#investment" className="transition hover:text-blue-600">
              Investment
            </Link>
          </nav>

        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 QSI Semiconductors. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
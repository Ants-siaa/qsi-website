"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import QSILogo from "./QSILogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/85 backdrop-blur-lg">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link href="/" aria-label="QSI Semiconductors home">
          <QSILogo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="#technology"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
          >
            Technology
          </Link>

          <Link
            href="#markets"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
          >
            Markets
          </Link>

          <Link
            href="#partners"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
          >
            Partnerships
          </Link>

          <Link
            href="#investment"
            className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
          >
            Investment
          </Link>

          <Link
            href="#investment"
            className="
              rounded-full
              bg-blue-700
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-800
              hover:shadow-lg
            "
          >
            Investment Prospectus
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          type="button"
          className="text-slate-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            <Link
              href="#technology"
              onClick={closeMenu}
              className="font-medium text-slate-700"
            >
              Technology
            </Link>

            <Link
              href="#markets"
              onClick={closeMenu}
              className="font-medium text-slate-700"
            >
              Markets
            </Link>

            <Link
              href="#partners"
              onClick={closeMenu}
              className="font-medium text-slate-700"
            >
              Partnerships
            </Link>

            <Link
              href="#investment"
              onClick={closeMenu}
              className="font-medium text-slate-700"
            >
              Investment
            </Link>

            <Link
              href="#investment"
              onClick={closeMenu}
              className="
                mt-2
                rounded-full
                bg-blue-700
                px-6
                py-3
                text-center
                font-semibold
                text-white
              "
            >
              Investment Prospectus
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}
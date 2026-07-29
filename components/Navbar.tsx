"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import QSILogo from "./QSILogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link href="/">
             <QSILogo />
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="#technology"
            className="text-sm font-medium text-gray-700 hover:text-blue-700"
          >
            Technology
          </Link>

          <Link
            href="#markets"
            className="text-sm font-medium text-gray-700 hover:text-blue-700"
          >
            Markets
          </Link>

          <Link
            href="#roadmap"
            className="text-sm font-medium text-gray-700 hover:text-blue-700"
          >
            Roadmap
          </Link>

          <Link
            href="#investment"
            className="text-sm font-medium text-gray-700 hover:text-blue-700"
          >
            Investment
          </Link>


          <button
            className="
              rounded-full 
              bg-blue-700 
              px-6 
              py-3 
              text-sm 
              font-semibold 
              text-white
              transition
              hover:bg-blue-800
            "
          >
            Investor Prospectus
          </button>

        </div>


        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>


      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            <Link href="#technology">
              Technology
            </Link>

            <Link href="#markets">
              Markets
            </Link>

            <Link href="#roadmap">
              Roadmap
            </Link>

            <Link href="#investment">
              Investment
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}
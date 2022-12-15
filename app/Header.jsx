"use client"
import React, { useState } from "react";
import Link from "next/link";
import { menuLinks } from "./lib/data"

export default function Header() {
  const [open, setOpen] = useState(false);

  // const menuLinks = [
  //   { name: "Our Rockets", link: "#rockets" },
  //   { name: "Testimonios", link: "#testimonios" },
  //   { name: "Contactar", link: "#contactar" },
  // ];


  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>

        <div>
          <button id="hamburger-button" className="relative h-8 w-8 cursor-pointer text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {/* <!-- &#9776; --> */}

            <div
              className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
            </div>
          </button>
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            {menuLinks?.map((menu, i) => (
              <a key={i} href={menu?.link} className="hover:opacity-90">{menu?.name}</a>
            ))}
          </nav>
        </div>
      </section>
      <section id="mobile-menu"
        className={`top-68 justify-content-center absolute  w-full origin-top animate-open-menu flex-col bg-teal-700 text-5xl  ${open ? "block" : "hidden"}`}>


        <nav className="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
          {/* <a href="#hero" className="w-full py-6 text-center hover:opacity-90">Home</a>
          <a href="#rockets" className="w-full py-6 text-center hover:opacity-90">Our Rockets</a>
          <a href="#testimonios" className="w-full py-6 text-center hover:opacity-90">Testimonios</a>
          <a href="#contactar" className="w-full py-6 text-center hover:opacity-90">Contactar</a>
          <a href="#footer" className="w-full py-6 text-center hover:opacity-90">Legal</a> */}
          {menuLinks?.map((menu, i) => (
            <a
              key={i}
              href={menu?.link}
              onClick={() => setOpen(false)}
              className="w-full py-6 text-center hover:opacity-90">{menu?.name}</a>
          ))}
        </nav>

      </section>
      {open && <h1>Menu abierto</h1>}
    </header>

  );
}

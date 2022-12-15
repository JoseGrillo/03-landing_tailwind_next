import React from "react";
import Link from "next/link";
import { menuLinks } from "./lib/data"

export default function Footer() {

  return (
    <footer id="footer" className="bg-teal-700 text-xl text-white">
      <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
          555 Astro Way<br />
          Fairfield, New Jersey 12345-5555<br />
          Email:
          <a href="mailto:inquiries@acmerockets.com">Inquires@AcmeRockets.com</a><br />
          Phone: <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
          {menuLinks?.map((menu, i) => (
            <a key={i} href={menu?.link} className="hover:opacity-90">{menu?.name}</a>
          ))}
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">Copyright &copy; <span id="year">2022</span></p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>


  );
}

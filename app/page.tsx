// import Image from "next/image";
// import styles from "./page.module.css";

import "./style.css";
import Header from "./Header";
import Hero from "./seccion/Hero";
import Rockets from "./seccion/Rockets";
import Testimonios from "./seccion/Testimonios";
import Contactar from "./seccion/Contactar";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <main className="mx-auto max-w-4xl">
        <Hero />
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        <Rockets />
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        <Testimonios />
        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
        <Contactar />
      </main>
      <Footer />
    </div>
  );
}

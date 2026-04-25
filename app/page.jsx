import Navbar from "./components/navbar";
import Hero from "./components/Hero";

import Stats from "./components/Stat"; 
import AccreEdge from "./components/AccreEdge";
import Partners from "./components/Partners";
import CAT from "./components/CAT";
import HowItWorks from "./components/Howitworks";
import FAQ from "./components/FAQ";
import Testimonials from "./components/testi";


import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats /> 
      <Partners />
      <AccreEdge />
      <CAT />
      <HowItWorks />
      <FAQ />
      <Testimonials />

      <Footer />
    </main>
  );
}
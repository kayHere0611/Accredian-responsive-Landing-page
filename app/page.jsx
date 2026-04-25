import Testimonials from "./components/testi";
import FAQ from "./components/FAQ";
import CAT from "./components/CAT";
import AccreEdge from "./components/AccreEdge";
import Partners from "./components/Partners";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stat";
import Footer from "./components/Footer";
import HowItWorks from "./components/Howitworks";

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
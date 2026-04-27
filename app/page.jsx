"use client"
import { useState } from "react";

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

import Lead from "./components/Lead";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);


  return (
    <main>
      {!submitted ? (
        <Lead onSuccess={() => setSubmitted(true)} /> 
      ) : (
        <>
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
      </>
      )}
    </main>
  );
}

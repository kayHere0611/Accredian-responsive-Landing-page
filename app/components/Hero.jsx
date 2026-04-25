"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <section
      id="hero"
      className="relative z-0 text-black flex flex-col md:flex-row items-center justify-between px-12 py-16"
    >
      {/* Left text block */}
      <div className="md:w-1/2">
        <h1 className="text-center text-6xl font-semibold sm:text-left text-black">
          Next-Gen
          <span className="text-blue-600 font-semibold"> Expertise</span>
          <br /> For Your
          <span className="text-blue-600 font-semibold"> Enterprise</span>
        </h1>
      </div>

      {/* Right image block */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/prof.png" // ✅ place this image in /public folder
          alt="Professional with laptop"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

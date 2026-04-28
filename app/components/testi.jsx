"use client";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      company: "ADP",
      logo:"/adp.png",
      quote:
        "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      company: "Bayer",
      logo:"/bayer.png",
      quote:
        "Accredian’s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []);
useEffect(() => { fetch("/api/data").then(res => res.json()).then(setData); }, []);

  return (
    <section id="testimonials" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Testimonials from Our Partners
      </h2>
      <p className="text-lg mb-12 text-gray-600">
        What Our Clients Are Saying
      </p>

      {/* Mobile: finger swipe */}
      <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="snap-center flex-shrink-0 w-full text-left"
          >
            <div className="p-6 bg-white rounded-lg shadow text-left">
            <img
              src={t.logo}
              alt={t.company}
              className="h-12 mb-4 object-contain"
            />
            <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
          </div>
          </div>
        ))}
      </div>

      {/* Desktop: grid view */}
      <div className="hidden md:grid grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition text-left"
          >
            <img
              src={t.logo}
              alt={t.company}
              className="h-12 mb-4 object-contain"
            />
            <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

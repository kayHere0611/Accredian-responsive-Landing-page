"use client";
import { useEffect, useState } from "react";

export default function CAT() {
  const items = [
    {
      title: "Concept",
      desc: "Foundational knowledge for deep subject understanding.",
      icon: "💡",
    },
    {
      title: "Application",
      desc: "Practical implementation through real-world scenarios.",
      icon: "⚙️",
    },
    {
      title: "Tools",
      desc: "Resources and techniques for effective skill mastery.",
      icon: "🛠️",
    },
  ];

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <section id="CAT" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        The <span className="text-blue-600 font-semibold">CAT Framework</span>
      </h2>
      <p className="text-lg mb-12 text-gray-600">
        Our Proven approach for{" "}
        <span className="text-blue-600 font-semibold">Learning Excellence</span>
      </p>

      {/* ✅ Unified flow for all screens */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-6xl mx-auto relative">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center w-64"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-gray-700">{item.desc}</p>
          </div>
        ))}

        {/* ✅ Curved connectors */}
        <svg
          className="absolute w-full h-32 top-1/2 -translate-y-1/2 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 18% 50% C 28% 20%, 38% 80%, 48% 50%"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />
          <path
            d="M 52% 50% C 62% 20%, 72% 80%, 82% 50%"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#3b82f6" />
            </marker>
          </defs>
        </svg>
      </div>
    </section>
  );
}

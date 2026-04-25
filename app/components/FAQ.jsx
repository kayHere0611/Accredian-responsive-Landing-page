"use client";
import { useState } from "react";

export default function FAQ() {
  const categories = {
    "About the Course": [
      "What types of corporate training programs does Accredian offer?",
      "What domain specializations are available?",
      "Who are the instructors for these programs?",
    ],
    "About the Delivery": [
      "What formats are the programs delivered in?",
      "Can the courses be customized for specific industries or teams?",
      "What is the ideal team size for corporate training?",
    ],
    "Miscellaneous": [
      "How do we get started with Accredian?",
      "Is there post-training support available?",
    ],
  };

  const [activeCategory, setActiveCategory] = useState("About the Course");

  return (
   <section id="faq" className="py-16 bg-gray-50">
  <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
    Frequently Asked Questions
  </h2>

  {/* ✅ Centered container */}
  <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8 px-12">

    {/* Left side categories */}
    <div className="flex md:flex-col gap-4 md:w-1/4 justify-center">
      {Object.keys(categories).map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeCategory === cat
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 border"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Right side questions */}
    <div className="md:w-3/4 bg-white rounded-lg shadow p-6">
      {categories[activeCategory].map((q, idx) => (
        <div key={idx} className="mb-4">
          <p className="text-lg font-medium text-gray-900">{q}</p>
        </div>
      ))}
      <div className="text-center mt-6">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Enquire Now
        </button>
      </div>
    </div>
  </div>
</section>

  );
}

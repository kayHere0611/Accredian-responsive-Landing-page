
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


  return (
    <section id="CAT" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        The <span className="text-blue-500 font-semibold">CAT Framework</span>
      </h2>
      <p className="text-lg mb-12 text-gray-600">
        Our Proven approach for{" "}
        <span className="text-blue-500 font-semibold">Learning Excellence</span>
      </p>

      {/* ✅ Unified flow for all screens */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-2xl mx-auto relative">
        <img src="/CATv2.svg" alt="CAT Framework" />
      </div>
    </section>
  );
}

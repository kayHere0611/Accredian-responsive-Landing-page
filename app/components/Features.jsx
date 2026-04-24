export default function Features() {
  const items = [
    "Tailored Solutions",
    "Industry Insights",
    "Expert Guidance"
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <span className="text-green-500 font-bold text-xl">✔</span>
              <h3 className="text-lg font-semibold mt-2">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

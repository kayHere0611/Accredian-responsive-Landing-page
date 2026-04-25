export default function AccredianEdge() {
  const items = [
  { title: "Flexible Delivery", icon: "📦", desc: "Online and offline options tailored to your needs." },
  { title: "Tailored Solutions", icon: "💡", desc: "Programs customized to your organization’s goals and challenges." },
  { title: "Expert Guidance", icon: "👤", desc: "Learn from industry leaders with real-world success." },
  { title: "Innovative Framework", icon: "⚙️", desc: "Proprietary methods for impactful, application-driven results." },
  { title: "Advanced Technology", icon: "🌐", desc: "State-of-the-art LMS for seamless learning experiences." },
  { title: "Diverse Offerings", icon: "➡️", desc: "Courses across industries, skill levels, and emerging fields." },
  { title: "Proven Impact", icon: "🎯", desc: "Trusted by leading organizations for measurable ROI." },
];


  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">The Accredian Edge</h2>
      <p className="text-lg mb-12 text-gray-600">
        Key Aspects of Our Strategic Training
      </p>

      {/* ✅ Mobile: Circle USP diagram */}
      <div className="block md:hidden">
        <div className="relative w-80 h-80 mx-auto rounded-full border-4 border-blue-200 flex items-center justify-center overflow-hidden">
          <div className="absolute text-center">
            <h3 className="text-xl font-bold text-blue-600">OUR USPs</h3>
          </div>
          {items.map((item, idx) => {
            const angle = (idx / items.length) * 360;
            return (
              <div
                key={idx}
                className="absolute flex flex-col items-center"
                style={{
                  transform: `rotate(${angle}deg) translate(6rem) rotate(-${angle}deg)`,
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl mb-1">
                  {item.icon}
                </div>
                <p className="text-xs font-semibold text-gray-800">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ Desktop: Grid/Stats style */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

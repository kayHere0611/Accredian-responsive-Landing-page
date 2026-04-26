
export default function Stats() {
  
  const stats = [
    {
      number: "10K+",
      label: "Professionals Trained For Exceptional Career Success",
    },
    {
      number: "200+",
      label: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      number: "5K+",
      label: "Active Learners Engaged In Dynamic Courses",
    },
  ];
useEffect(() => { fetch("/api/data").then(res => res.json()).then(setData); }, []);

  return (
    <section id="stats" className="relative z-20 py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Track Record</h2>
      <p className="text-lg mb-12 text-gray-600">
        The Numbers Behind Our Success
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="text-4xl font-extrabold text-blue-600">{stat.number}</p>
            <p className="mt-2 text-lg text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

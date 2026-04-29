
export default function HowItWorks() {
  const steps = [
    {
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      icon: "📊",
    },
    {
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals.",
      icon: "📝",
    },
    {
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: "🚀",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        How We &nbsp;
        <span className="text-blue-500">
          Deliver Results 
        </span>
        &nbsp; That Matter
      </h2>

      <p className="text-lg mb-12 text-gray-600">
        A Structured Three-Step Approach to
        <span className="text-blue-500">
           &nbsp; Skill Development
        </span>
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-8 max-w-lg bg-blue-100 border border-blue-500 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="relative rounded-lg text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full shadow bg-blue-500 text-2xl absolute left-1/2 -top-6 transform -translate-x-1/2">
              {step.icon}
            </div>
            <h3 className="mt-14 text-xl font-semibold text-gray-900">{step.title}</h3>
            <p className="hidden sm:block mt-2 text-gray-700">{step.desc}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}

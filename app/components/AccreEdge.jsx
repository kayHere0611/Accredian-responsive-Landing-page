
const items = [
  { title: "Tailored Solutions", icon: "💡", desc: "Programs customized to your organization’s goals and challenges." },
  { title: "Expert Guidance", icon: "👤", desc: "Learn from industry leaders with real-world success." },
  { title: "Innovative Framework", icon: "⚙️", desc: "Proprietary methods for impactful, application-driven results." },
  { title: "Advanced Technology", icon: "🌐", desc: "State-of-the-art LMS for seamless learning experiences." },
  { title: "Diverse Offerings", icon: "➡️", desc: "Courses across industries, skill levels, and emerging fields." },
  { title: "Proven Impact", icon: "🎯", desc: "Trusted by leading organizations for measurable ROI." },
  { title: "Flexible Delivery", icon: "📦", desc: "Online and offline options tailored to your needs." },
];

const domains = [
    { icon: "💡", label: "Product & Innovation Hub" },
    { icon: "🧠", label: "Gen-AI Mastery" },
    { icon: "👤", label: "Leadership Elevation" },
    { icon: "📊", label: "Tech & Data Insights" },
    { icon: "⚙️", label: "Operations Excellence" },
    { icon: "🌐", label: "Digital Enterprise" },
    { icon: "💰", label: "Fintech Innovation Lab" },
  ];

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-16 px-4 font-semibold text-gray-950 text-center">
      {/* Header */}
      <h1 className="text-2xl md:text-5xl font-bold">
        The <span className="text-blue-500">Accredian Edge</span>
      </h1>
      <p className="mt-2 font-medium text-gray-900 ">
        Key Aspects of{" "}
        <span className="text-blue-500 font-medium">
          Our Strategic Training
        </span>
      </p>

      {/* ================= MOBILE (CIRCLE) ================= */}<div className="mt-12 flex justify-center lg:hidden">
  <div className="relative w-[90vw] max-w-[360px] aspect-square">

    {/* Ring */}
    <div className="absolute inset-0 rounded-full border-[22px] border-blue-500"></div>

    {/* Center */}
    <div className="absolute text-black inset-0 m-auto w-24 h-24 rounded-full bg-white shadow flex items-center justify-center font-bold z-20 text-sm">
      OUR <br /> USPs
    </div>

    {/* Items */}
    {items.map((item, i) => {
  const angle = (i / items.length) * 360;
  const radius = 115;

  return (
    <div
      key={i}
      className="absolute flex flex-col items-center text-center"
      style={{
        top: "50%",
        left: "50%",
        transform: `
          translate(-50%, -50%)
          rotate(${angle}deg)
          translate(${radius}px)
          rotate(-${angle}deg)
        `,
      }}
    >
      {/* Icon */}
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm shadow">
        {item.icon}
      </div>

      {/* Title */}
      <p className="mt-1 text-[10px] font-medium text-gray-800 leading-tight w-20">
        {item.title}
      </p>
    </div>
  );
})}
  </div>
</div>

      {/* ================= DESKTOP (TIMELINE) ================= */}
      <div className="hidden lg:block mt-20">
        <div className="relative max-w-6xl mx-auto">

          {/* Line */}
          <div className="absolute top-10 left-0 w-full h-[2px] bg-gray-300"></div>

          <div className="grid grid-cols-7 gap-6">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">

                {/* Circle Icon */}
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl shadow-lg z-10">
                  {item.icon}
                </div>

                {/* Connector */}
                <div className="w-[2px] h-6 bg-blue-500"></div>

                {/* Text */}
                <div className="max-w-[160px]">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= DOMAIN EXPERTISE ================= */}
<div className="mt-20 max-w-6xl mx-auto">

  <h1 className="text-2xl md:text-5xl font-bold">
    Our <span className="text-blue-500">Domain Expertise</span>
  </h1>
  <p className="mt-2 font-medium text-gray-900 ">
    Specialized Programs{" "}
    <span className="text-blue-500 font-medium">
      Designed to Fuel Innovation
    </span>
  </p>
<div className=" justify-center flex mt-10">
<div className="grid grid-cols-2 lg:grid-cols-3 max-w-3xl w-full gap-6">
  {domains.map((d, idx) => (
    <div
      key={idx}
      className=
      {`bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4 
                   flex items-center gap-3 lg:flex-col lg:items-center lg:text-center
                   ${idx === domains.length - 1 ? "lg:col-start-2" : ""}`}
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center text-white text-xl">
        {d.icon}
      </div>

      {/* Label */}
      <p className="text-gray-700 text-base md:text-lg font-semibold">{d.label}</p>
    </div>
  ))}
</div>
</div>




</div>

    </section>
  );
}
export default function Partners() {
  const logos = [
    { src: "/Reliance.png", alt: "Reliance Industries" },
    { src: "/hcl.png", alt: "HCL" },
    { src: "/ibm.png", alt: "IBM" },
    { src: "/CRIF.png", alt: "CRIF" },
    { src: "/adp.png", alt: "ADP" },
    { src: "/bayer.png", alt: "Bayer" },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Proven Partnerships</h2>
      <p className="text-lg mb-8 text-gray-600">
        Successful Collaborations With the Industry’s Best
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-16 object-contain"
          />
        ))}
      </div>
    </section>
  );
}

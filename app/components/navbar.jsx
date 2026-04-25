// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full top-0 z-50">
//       <div className="text-2xl font-bold text-blue-600">Accredian</div>
//       <ul className="flex space-x-6 text-gray-700 font-medium">
//         <nav className="flex gap-6">
//   <a href="#hero">Home</a>
//   <a href="#stats">Stats</a>
//   <a href="#partn">Partners</a>
//   <a href="#edge">Accredian Edge</a>
//   <a href="#CAT">CAT</a>
//   <a href="#how-it-works">How It Works</a>
//   <a href="#faq">FAQs</a>
//   <a href="#testimonials">Testimonials</a>
//   <a href="#footer">Contact</a>
// </nav>

//       </ul>
//     </nav>
//   );
// }


"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Stats", href: "#stats" },
    { name: "Partners", href: "#partn" },
    { name: "Accredian Edge", href: "#edge" },
    { name: "CAT", href: "#CAT" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQs", href: "#faq" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Accredian
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-600 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-md px-6 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
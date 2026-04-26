// "use client";
// import { useState } from "react";

// export default function LeadCaptureForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // 🔑 Replace with your API endpoint
//     const res = await fetch("/api/lead", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     if (res.ok) {
//       alert("Thanks! We’ll reach out soon.");
//       setFormData({ name: "", email: "", phone: "", message: "" });
//     } else {
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section id="lead-form" className="py-16 bg-gray-50">
//       <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
//           Get in Touch
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             rows="4"
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Thanks! We’ll reach out soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="lead-form" className="py-16 bg-gray-50">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          {status && <p className="text-sm mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}

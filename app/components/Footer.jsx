export default function Footer() {
  return (
    <footer id="footer" className="bg-blue-500 text-white">
      {/* ✅ Top banner */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold mb-4 md:mb-0">
          Want to Learn More About Our Training Solutions?
          <br />
          <span className="font-normal">Get Expert Guidance for Your Team’s Success!</span>
        </h3>
        <button className="bg-white text-blue-500 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>

      {/* ✅ Main footer content */}
      <div className="bg-white text-gray-800 px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Logo + tagline + socials */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500 mb-2">accredian</h2>
            <p className="text-sm mb-4">credentials that matter</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">🌐</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
          </div>

          {/* Accredian links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accredian</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">About</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500">Why Accredian</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">enterprise@accredian.com</p>
            <p className="mb-4">
              4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Enquire Now
            </button>
            <p className="text-sm mt-2">Speak with our Advisor</p>
          </div>
        </div>
        
      <p>© 2026 AccredianKaveri. All rights reserved.</p>
      </div>
    </footer>
  );
}
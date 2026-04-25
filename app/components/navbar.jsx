export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">Accredian</div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <nav className="flex gap-6">
  <a href="#hero">Home</a>
  <a href="#stats">Stats</a>
  <a href="#partn">Partners</a>
  <a href="#edge">Accredian Edge</a>
  <a href="#CAT">CAT</a>
  <a href="#how-it-works">How It Works</a>
  <a href="#faq">FAQs</a>
  <a href="#testimonials">Testimonials</a>
  <a href="#footer">Contact</a>
</nav>

      </ul>
    </nav>
  );
}

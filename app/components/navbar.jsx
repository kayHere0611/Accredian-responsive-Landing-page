export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">Accredian</div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">Stats</a></li>
        <li><a href="#">Clients</a></li>
        <li><a href="#">Accredian Edge</a></li>
        <li><a href="#">CAT</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </nav>
  );
}

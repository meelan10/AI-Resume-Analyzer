import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Features",
    "How it Works",
    "Pricing",
    "About",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            Resume<span className="text-gray-900">AI</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navLinks.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="font-medium hover:text-blue-600">
            Login
          </button>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-6 gap-5">
            {navLinks.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-blue-600"
              >
                {item}
              </li>
            ))}

            <button className="text-left">Login</button>

            <button className="bg-blue-600 text-white py-3 rounded-lg">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
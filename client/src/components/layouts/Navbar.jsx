import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "Features",
    "About",
  ];

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          ResumeAI
        </h1>

        <ul className="hidden md:flex gap-8">
          {links.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-600"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-4">

          <Link
            to="/login"
            className="px-4 py-2"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Get Started
          </Link>

        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>

      </div>

      {menuOpen && (

        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-5 gap-5">

            <Link to="/">Home</Link>

            <Link to="/">Features</Link>

            <Link to="/">About</Link>

            <Link to="/login">
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 text-white p-3 rounded-lg text-center"
            >
              Get Started
            </Link>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-cyan-500/20">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          Ezra Tirivayi
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-cyan-400 transition"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-cyan-400 transition"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#certifications"
              className="hover:text-cyan-400 transition"
            >
              Certifications
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-cyan-500/20">

          <ul className="flex flex-col p-6 gap-5 text-white font-medium">

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#education"
                onClick={() => setMenuOpen(false)}
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#certifications"
                onClick={() => setMenuOpen(false)}
              >
                Certifications
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoMaria.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Links */}
        <div className="hidden md:flex space-x-6 text-gray-600">
          <Link to="/about" className="hover:text-black">Über mich</Link>
          <Link to="/projects" className="hover:text-black">Projekte</Link>
        </div>

        {/* Logo in der Mitte */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Logo Maria"
              className="h-10 md:h-12 object-contain"
            />
          </Link>
        </div>

        {/* Rechts */}
        <div className="hidden md:flex space-x-6 text-gray-600">
          <Link to="/contact" className="hover:text-black">Kontakt</Link>
          <Link to="/" className="hover:text-black">Startseite</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

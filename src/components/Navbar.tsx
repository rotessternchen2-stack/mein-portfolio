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
      className={`bg-violet-300 w-full fixed top-0 justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur shadow-sm" : ""
      }`}
    >
      <div className="flex items-center ">
        {/* Links */}
        <div className=" px-4 hidden md:flex space-x-6 text-gray-600">
          <Link to="/about" className="hover:text-black">Über mich</Link>
          <Link to="/projects" className="hover:text-black">Projekte</Link>
        </div>

        {/* Logo in der Mitte */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Logo Maria"
              className="h-10 md:h-12 px-4"
            />
          </Link>
        </div>

        {/* Rechts */}
        <div className="md:flex space-x-6 text-gray-600 px-4">
          <Link to="/contact" className="hover:text-black">Kontakt</Link>
          <Link to="/" className="hover:text-black">Startseite</Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;

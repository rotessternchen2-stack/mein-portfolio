import { useState } from "react";
import { Link,  Navigate , useNavigate } from "react-router-dom";
import logo from "../assets/logoMaria.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="bg-green-200 border-b-2 border-solid rounded-b-2xl border-green-700 fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between text-gray-900">
        
        {/* Linkgruppe Links */}
        <div className="flex space-x-8 items-center">
          <Link to="/about" className="hover:text-green-700 transition">Über mich</Link>
          <Link to="/do" className="hover:text-green-700 transition">Do</Link>

          {/* Portfolio Dropdown */}
          <div className="relative">
            <button
                onClick={() => {
                navigate("/Portfolio");
                setIsDropdownOpen(!isDropdownOpen);
                }}
                className="flex items-center hover:text-green-700 transition"
                >
                Portfolio
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                 </svg>
            </button>

            {isDropdownOpen && (
              <div
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute left-0 mt-2 w-40 bg-white border border-green-300 rounded-md shadow-md z-50"
              >
                <ul className="py-2 text-sm text-gray-700">
                  {Array.from({ length: 2025 - 2014 + 1 }, (_, i) => (
                    <li key={i}>
                      <Link
                        to={`/portfolio/${2014 + i}`}
                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-900"
                      >
                        {2014 + i}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Logo zentriert */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo Maria" className="max-h-14" />
        </Link>

        {/* Linkgruppe Rechts */}
        <div className="flex space-x-8 items-center">
          <Link to="/contact" className="hover:text-green-700 transition">Kontakt</Link>
          <Link to="/" className="hover:text-green-700 transition">Startseite</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

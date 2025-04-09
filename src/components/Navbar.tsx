import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logoMaria.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="grid grid-cols-5 items-center justify-center text-center bg-green-200 text-gray-900 border-b-2 border-solid rounded-b-2xl border-green-700 fixed w-full z-50">
          <Link to="/about" className="hover:text-green-700 ">Über mich</Link>
          <div className="relative flex justify-center ">
            <button
                onClick={() => {
                navigate("/Portfolio");
                setIsDropdownOpen(!isDropdownOpen);
                }}
                className="hover:text-green-700 flex justify-center items-center"
              >
                Portfolio
                <svg className="w-3 h-3 ml-1 " fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                 </svg>
            </button>

            {isDropdownOpen && (
              <div
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute top-full mt-1.6 bg-white border border-green-300 rounded-md w-32 shadow-md z-50"
              >
                <ul className=" text-sm text-gray-700">
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
          
        

        {/* Logo zentriert */}
        <Link to="/" className="flex justify-center">
          <img src={logo} alt="Logo Maria" className="max-h-14" />
        </Link>

        {/* Linkgruppe Rechts */}
        
          <Link to="/contact" className="hover:text-green-700 transition">Kontakt</Link>
          <Link to="/" className="hover:text-green-700 transition">Startseite</Link>
        
      
    </nav>
  );
};

export default Navbar;

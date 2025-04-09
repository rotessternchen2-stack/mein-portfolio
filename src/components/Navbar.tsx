import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logoMaria.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className=" bg-green-200 text-green-900 border-b-2 border-solid rounded-b-2xl border-green-700 fixed w-full z-50">
          <div className="mx-64 grid grid-cols-5 items-center justify-center text-center">
          <Link to="/about" className="hover:text-green-700 ">Über mich</Link>
          <div className="flex justify-center items-center hover:text-green-700">
              <Link to="/portfolio"
                        className="">Portfolio
              </Link>
              <button >
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                 </svg>
              </button>
            </div>
        <Link to="/" className="flex justify-center">
          <img src={logo} alt="Logo Maria" className="max-h-14" />
        </Link>
        <Link to="/contact" className="hover:text-green-700 transition">Kontakt</Link>
        <Link to="/" className="hover:text-green-700 transition">Startseite</Link>
        </div>
      
    </nav>
  );
};

export default Navbar;
